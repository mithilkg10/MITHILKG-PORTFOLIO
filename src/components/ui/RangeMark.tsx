export function RangeMark({className = ""}: {className?: string}) {
  return <svg className={`range-mark ${className}`} viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
    <circle cx="32" cy="32" r="27" stroke="currentColor" opacity=".25"/>
    <path className="range-orbit" d="M32 5a27 27 0 0 1 27 27" stroke="currentColor" strokeWidth="2"/>
    <path d="M14 19h18l18 13-18 13H14V19Zm18 0v26M14 19l18 13-18 13m18-13h18" stroke="currentColor" strokeWidth="1.5"/>
    <path d="m32 25 7 7-7 7-7-7 7-7Z" fill="currentColor" fillOpacity=".12" stroke="currentColor"/>
    <circle cx="14" cy="19" r="3" fill="currentColor"/><circle cx="50" cy="32" r="3" fill="currentColor"/>
    <circle cx="14" cy="45" r="3" fill="currentColor"/><circle cx="32" cy="45" r="3" fill="#efb45c"/>
  </svg>;
}
