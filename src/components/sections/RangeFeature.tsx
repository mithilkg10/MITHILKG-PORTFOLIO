import Link from "next/link";
import {RangeMark} from "@/components/ui/RangeMark";

export function RangeProof(){return <div className="range-proof-strip" aria-label="Verified CyberLab results"><span><b>6</b> Investigations</span><span><b>10</b> Sigma Authored</span><span><b>7</b> Validated</span><span><b>5</b> ATT&CK Techniques</span><Link href="/evidence">Open Evidence ↗</Link></div>}
export function RangeFeature({project=false}:{project?:boolean}){return <article className={`range-feature ${project?'range-project':''}`}>
  <div className="range-feature-art"><RangeMark/><small>ISOLATED LAB / VERIFIED EVIDENCE</small></div>
  <div className="range-feature-copy"><p className="range-kicker">{project?'FLAGSHIP SECURITY PROJECT':'BUILT BY MITHIL'}</p><h3>{project?'MKG Cyber Defense Lab':'From controlled behavior to an analyst decision.'}</h3>
  <p>An isolated range for adversary emulation, detection engineering and incident investigation. Kali and Windows produce preserved evidence through Sysmon, Wazuh, authored Sigma and VYOMRIX, with documented MITRE mappings.</p>
  <p className="range-scope">Kali: request source in INC 005 and collector in INC 006. Four scenarios retain their Windows execution origin. INC 004 remains PARTIAL.</p>
  {!project&&<div className="range-authorship"><span><b>10</b> Sigma authored · <b>7</b> validated</span><span><b>1</b> custom Wazuh rule · <b>9</b> observed built in IDs</span></div>}
  <div className="range-feature-actions"><Link className="range-action-primary" href="/lab">{project?'Open Interactive Range':'Explore Range'} ↗</Link><Link href="/evidence">View Evidence</Link>{!project&&<Link href="/lab/demo?duration=90">Career Demo</Link>}<a href="https://github.com/mithilkg10/MKG-Cyber-Defense-Lab">{project?'Open Repository':'GitHub'}</a></div></div>
</article>}
