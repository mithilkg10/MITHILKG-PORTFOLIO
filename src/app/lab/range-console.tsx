'use client';

import Link from 'next/link';
import {useEffect, useReducer, useRef, useState} from 'react';
import records from './replay-data.json';

const stageNames = ['Controlled emulation','Endpoint','Telemetry','Detection','Wazuh','VYOMRIX','Analyst decision','Report'];
const tabs = ['Raw event','Normalized','Detection','Wazuh','Incident'] as const;
type Tab = typeof tabs[number];
type Action = 'Investigate' | 'Contain' | 'Escalate' | 'False positive';
type State = {step:number;playing:boolean;opened:boolean;decision:Action|null;notes:string[]};
type Event = {type:'start'|'next'|'pause'|'reset'|'open'|'close'} | {type:'decision';value:Action} | {type:'note';value:string};
const initial:State = {step:-1,playing:false,opened:false,decision:null,notes:[]};
function reducer(s:State,e:Event):State {
  switch(e.type){
    case 'start':return {...initial,step:0,playing:true};
    case 'reset':return initial;
    case 'pause':return s.step>=0&&s.step<6?{...s,playing:!s.playing}:s;
    case 'next':{const step=Math.min(s.step+1,6);return s.step<0||s.step>=6?s:{...s,step,playing:s.playing&&step<6};}
    case 'close':return {...s,opened:false};
    case 'open':return s.step>=5?{...s,opened:true}:s;
    case 'note':return s.opened&&e.value.trim()?{...s,notes:[...s.notes,e.value.trim().slice(0,500)]}:s;
    case 'decision':return s.step>=6&&s.opened?{...s,step:7,playing:false,decision:e.value}:s;
  }
}
const pretty = (value:unknown) => JSON.stringify(value,null,2);
const feedback:Record<Action,string> = {
  Investigate:'You chose further review. Compare the observables and original sources before changing the disposition.',
  Contain:'You recorded a simulated containment decision. No endpoint was isolated and no process was stopped.',
  Escalate:'You recorded escalation for further review. No alert or message was sent.',
  'False positive':'This is your practice disposition, not a change to the documented case. Benign emulation can still validate detection logic.',
};

export function CyberRangeConsole({demo=false}:{demo?:boolean}) {
  const [selected,setSelected]=useState(1);
  const [state,dispatch]=useReducer(reducer,initial);
  const [tab,setTab]=useState<Tab>('Raw event');
  const [draft,setDraft]=useState('');
  const [notice,setNotice]=useState('');
  const selector=useRef<HTMLSelectElement>(null);
  const stream=useRef<HTMLElement>(null);
  const c=records[selected];
  const active=state.step;
  const status=active<0?'IDLE':active===7?'COMPLETE':active===6?'AWAITING DECISION':state.playing?'RUNNING':'PAUSED';

  useEffect(()=>{
    if(!state.playing||active>=6)return;
    const timer=setTimeout(()=>dispatch({type:'next'}),8000);
    return()=>clearTimeout(timer);
  },[state.playing,active]);
  useEffect(()=>{
    const slug=new URLSearchParams(window.location.search).get('scenario');
    const index=records.findIndex(r=>r.slug===slug);
    if(index>=0)setSelected(index);
  },[]);

  useEffect(()=>{if(stream.current)stream.current.scrollTop=stream.current.scrollHeight;},[active]);

  function reset(){dispatch({type:'reset'});setDraft('');setNotice('');setTab('Raw event');}
  function choose(index:number){setSelected(index);reset();}
  const events=[
    `Selected ${c.id}: ${c.title}. ${c.origin}.`,
    c.method,
    `Preserved ${c.telemetry}. ${c.proof}`,
    `${c.detection}. ${c.id==='INC-004'?'LSASS Sigma NOT_TRIGGERED.':'Authored Sigma validated against the preserved evidence; not deployed by this replay.'}`,
    c.alert?`Preserved ${c.alert.rule.id==='100201'?'custom':'built-in'} Wazuh ${c.alert.rule.id}, alert ${c.alert.alert_id}.${c.id==='INC-004'?' Discovery only; no credential-access success.':''}`:'No Wazuh alert for this behavior. Continue with application/endpoint evidence.',
    `Documented VYOMRIX incident ${c.incident}. Analyst reconstruction; this replay creates no backend incident.`,
    'Review the evidence, open the incident workspace and record a practice decision.',
    `Practice decision: ${state.decision ?? 'none'}. Historical outcome remains ${c.status}.`,
  ];
  const nodeStates=[
    'IDLE · not used in Phase 3',
    active<0?'IDLE':active===0?'ORIGIN':active===1?'ACTIVE':active===2?'TELEMETRY':active===3?'DETECTION REVIEW':active===7&&state.decision==='Contain'?'CONTAINED · simulated':'EVIDENCE PRESERVED',
    active<4?'IDLE':c.alert?(active===4?'ALERT':'ALERT PRESERVED'):'NO ALERT EVIDENCE',
    active<5?'IDLE':active===7?'DECISION RECORDED':'INVESTIGATION',
  ];
  const report={
    mode:'SAFE SIMULATION — SANITIZED LAB EVIDENCE REPLAY',
    scenario:c.id,title:c.title,incident:c.incident,endpoint:'WIN-LAB-01',technique:c.mitre,
    historical:{outcome:c.status,severity:c.severity,detection:c.detection,wazuhRule:c.alert?.rule.id??null,alertId:c.alert?.alert_id??null,containment:c.containment,remediation:c.remediation,retest:c.retest,limit:c.limit},
    visitor:{action:state.decision,notes:state.notes,result:state.decision?feedback[state.decision]:'No decision recorded'},
    timeline:events.slice(0,active+1).map((text,i)=>({replayOffsetSeconds:i*8,text})),
    timing:'Offsets are presentation timing, not original event chronology. Source timestamps remain in original artifacts.',
    sources:c.sources,
  };
  function download(){
    const url=URL.createObjectURL(new Blob([pretty(report)],{type:'application/json'}));
    const a=document.createElement('a');a.href=url;a.download=`${c.id}-simulated-incident-report.json`;a.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);setNotice('Practice report downloaded. Notes stayed in this browser.');
  }
  const rawSource='/lab/evidence/'+c.rawPath;
  return <section className={`range-console ${demo?'range-demo':''}`} id="range-console" data-workspace={state.opened} data-step={active} aria-labelledby="range-title"
    onKeyDown={e=>{
      if((e.target as HTMLElement).closest('input,textarea,select,button,a')||e.altKey||e.ctrlKey||e.metaKey)return;
      if(e.key==='ArrowRight'){e.preventDefault();e.stopPropagation();dispatch({type:'next'});}
      if(e.key===' '){e.preventDefault();e.stopPropagation();dispatch({type:'pause'});}
      if(e.key==='Escape'){e.stopPropagation();reset();}
    }}>
    <div className="range-heading"><div><small>SAFE SIMULATION / EVIDENCE REPLAY</small><h1 id="range-title">MKG CYBER <span>DEFENSE LAB</span></h1></div><span className="range-ready">■ CYBER RANGE STATUS: READY</span></div>
    <p className="range-disclaimer">Replaying sanitized lab evidence. No live connection to private VMs. All controls and notes stay in this browser.</p>
    <div className="range-status"><span>NETWORK <b>HOST-ONLY / NO BRIDGE</b></span><span>TARGET <b>WIN-LAB-01</b></span><span>ENGINE <b>WAZUH</b></span><span>ANALYST UI <b>VYOMRIX</b></span><span>SIMULATION <b data-testid="range-status">{status}</b></span></div>
    <p className="range-guide">Choose a scenario → Start → Follow telemetry → Investigate → Record a decision</p>
    <div className="range-toolbar"><label htmlFor="range-scenario">Scenario<select id="range-scenario" ref={selector} value={selected} onChange={e=>choose(Number(e.target.value))}>{records.map((r,i)=><option key={r.id} value={i}>{r.id} · {r.title}{r.status==='PARTIAL'?' · PARTIAL':''}</option>)}</select></label>
      <button className="range-start" onClick={()=>{dispatch({type:'start'});setNotice('');setDraft('');}} disabled={active>=0}>{demo?'Start demo':'Start safe simulation'}</button>
      <button onClick={()=>dispatch({type:'next'})} disabled={active<0||active>=6}>Next</button>
      <button onClick={()=>dispatch({type:'pause'})} disabled={active<0||active>=6}>{state.playing?'Pause':'Resume'}</button>
      <button onClick={reset}>Reset lab</button>
    </div>
    <div className="range-topology" aria-label="Replay architecture; historical roles, not live VM health">{['KALI-ATTACK','WIN-LAB-01','WAZUH-MGR','VYOMRIX'].map((name,i)=><div key={name} className={`range-node ${i===3?'analyst':''}`} data-active={i===1&&active>=0&&active<=3||i===2&&active===4||i===3&&active>=5}>
      <small>{['Available emulation role','Recorded origin / endpoint','Preserved detection source','Documented analyst workflow'][i]}</small><strong>{name}</strong><span>{nodeStates[i]}</span></div>)}</div>
    <p className="range-origin">ORIGIN: {c.origin}. {selected>=4?'Application / collector: 192.168.56.1:8085. ':''}Kali was not used. Diagram highlights are replay states.</p>
    <div className="range-stage-track" aria-label="Replay progression">{stageNames.map((name,i)=><span key={name} data-current={active===i} data-past={active>i}>{String(i+1).padStart(2,'0')} {name}</span>)}</div>
    <div className="range-main" tabIndex={0} aria-label="Replay work area. Right arrow advances, Space pauses, Escape resets.">
      <section ref={stream} className="range-stream" aria-labelledby="stream-title" tabIndex={0}><h2 id="stream-title">Event stream</h2><small>REPLAY OFFSETS · NOT SOURCE TIME</small><ol>{events.slice(0,active+1).map((text,i)=><li key={i}><code>00:{String(i*8).padStart(2,'0')}</code><span>{text}</span></li>)}</ol>{active<0&&<p>Select a case and start. No commands will execute.</p>}</section>
      <section className="range-inspector" aria-labelledby="inspector-title"><div className="range-panel-title"><h2 id="inspector-title">Telemetry inspector</h2><span>{c.id} / {c.status}</span></div>
        <div className="range-tabs" role="group" aria-label="Inspector views">{tabs.map(t=><button key={t} aria-pressed={tab===t} onClick={()=>setTab(t)}>{t}</button>)}</div>
        <div className="range-inspector-body" aria-live="polite" tabIndex={0}>
          {tab==='Raw event'&&<><p>Original preserved JSON · {c.rawPath.split('/').pop()}</p><pre tabIndex={0}>{pretty(c.raw)}</pre><a href={rawSource} target="_blank" rel="noreferrer">Open raw source ↗</a></>}
          {tab==='Normalized'&&<><p>Presentation summary derived from the case. Raw source values remain unchanged.</p><dl><dt>Endpoint</dt><dd>WIN-LAB-01</dd><dt>Origin</dt><dd>{c.origin}</dd><dt>Telemetry</dt><dd>{c.telemetry}</dd><dt>Observables</dt><dd>{c.observables}</dd><dt>Technique</dt><dd>{c.mitre}</dd><dt>Evidence result</dt><dd>{c.status} · {c.limit}</dd><dt>Source</dt><dd><a href={rawSource}>Preserved JSON</a></dd></dl></>}
          {tab==='Detection'&&<><p>AUTHORED BY MITHIL / CYBERLAB · Sigma logic reviewed against evidence, separately from Wazuh.</p>{c.rules.map(r=><article key={r.file}><h3>{r.text.match(/^title: (.+)/)?.[1]??r.file}</h3><span className="range-rule-status">{r.validation}</span><pre tabIndex={0}>{r.text}</pre><a href={'/lab/evidence/'+r.source}>Open authored rule ↗</a></article>)}{c.customRule&&<article><h3>Custom Wazuh 100201 · Authored by Mithil</h3><pre tabIndex={0}>{c.customRule}</pre></article>}</>}
          {tab==='Wazuh'&&<>{c.alert?<><p>{c.alert.rule.id==='100201'?'AUTHORED CUSTOM WAZUH':'BUILT-IN WAZUH'} · level {c.alert.rule.level}. {c.id==='INC-004'?'Discovery only; not credential access.':''}</p><pre tabIndex={0}>{pretty(c.alert)}</pre><a href={`/lab/evidence/incidents/${c.id}-${c.slug}/evidence/wazuh-alerts.json`}>Open alert source ↗</a></>:<p className="range-gap">No Wazuh alert is preserved for this behavior. {c.telemetry} supports this investigation; no synthetic alert is substituted.</p>}</>}
          {tab==='Incident'&&<><h3>{c.incident} · preserved investigation</h3><p>{c.investigation}</p><dl><dt>Severity</dt><dd>{c.severity} · documented case severity</dd><dt>Technique</dt><dd>{c.mitre}</dd><dt>Historical state</dt><dd>Contained · {c.status}</dd></dl><p>VYOMRIX uses Wazuh API/evidence for analyst reconstruction. This replay does not claim automatic alert-to-incident creation.</p><button disabled={active<5} onClick={()=>dispatch({type:'open'})}>Open incident</button></>}
        </div>
      </section>
    </div>
    <p className="range-announcement" role="status" aria-live="polite">{active<0?'Ready to replay preserved evidence.':`${stageNames[active]}: ${events[active]}`}</p><div className="range-workspace-bar"><span>{c.id} · {c.proof} <b>{c.status}</b></span><button disabled={active<5} onClick={()=>{dispatch({type:'open'});setTab('Incident');}}>Open analyst workspace</button></div>
    {state.opened&&<section className="range-workspace" aria-label="Analyst workspace"><div className="range-panel-title"><h2>Analyst workspace · {c.incident}</h2><button onClick={()=>dispatch({type:'close'})}>Review telemetry</button></div><p>{c.investigation}</p><p>Endpoint: WIN-LAB-01 · Case severity: {c.severity} · Alert: {c.alert?.alert_id??'None preserved'} · {c.mitre}</p><p>Observables: {c.observables}</p>
      <label htmlFor="analyst-note">Analyst note — stays in this session (500 characters)</label><textarea id="analyst-note" maxLength={500} value={draft} onChange={e=>setDraft(e.target.value)} placeholder="Record what the preserved evidence supports…"/><button disabled={!draft.trim()} onClick={()=>{dispatch({type:'note',value:draft});setDraft('');}}>Add analyst note</button>
      <ul className="range-notes" aria-live="polite">{state.notes.map((note,i)=><li key={i}><strong>ANALYST NOTE {i+1}</strong> {note}</li>)}</ul>
      <div className="range-decisions" role="group" aria-label="Practice analyst decisions">{(['Investigate','Contain','Escalate','False positive'] as Action[]).map(action=><button key={action} disabled={active<6||active===7} onClick={()=>dispatch({type:'decision',value:action})}>{action}</button>)}</div><p>Practice decisions never change historical evidence or contact any service. Historical result: {c.status}. {c.limit}</p>
    </section>}
    {active===7&&<section className="range-report" aria-label="Simulated incident summary"><small>SIMULATED INCIDENT SUMMARY / VISITOR DECISION</small><h2>{c.incident} · {state.decision}</h2><p>{state.decision&&feedback[state.decision]}</p><dl><dt>Scenario</dt><dd>{c.id} · {c.title}</dd><dt>Endpoint</dt><dd>WIN-LAB-01</dd><dt>Technique</dt><dd>{c.mitre}</dd><dt>Detection</dt><dd>{c.detection}</dd><dt>Wazuh rule</dt><dd>{c.alert?.rule.id??'None preserved'}</dd><dt>Historical result</dt><dd>{c.status} · {c.limit}</dd><dt>Historical containment</dt><dd>{c.containment}</dd><dt>Remediation guidance</dt><dd>{c.remediation}</dd></dl><div className="range-report-actions"><button onClick={download}>Download simulated incident report</button><button onClick={()=>{reset();requestAnimationFrame(()=>selector.current?.focus());}}>Run another scenario</button><Link href={`/lab/incidents/${c.slug}`}>Open full investigation ↗</Link></div><p role="status">{notice}</p></section>}
    <p className="range-footnote">VERIFIED: 6 scenarios · 10 Sigma authored · 7 validated · 1 custom Wazuh · 8 built-in IDs · 5 evidenced techniques.</p><p className="range-footnote">DATA MODE: PRESERVED REAL LAB EVIDENCE · 8-second presentation stages; source timestamps are not reordered. Auto replay pauses for your decision. Keyboard in work area: → Next · Space Pause · Esc Reset.</p>
  </section>;
}
