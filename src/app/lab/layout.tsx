import type { Metadata } from 'next';
import './lab.css';
export const metadata: Metadata = { title: 'MKG Cyber Defense Lab | Mithil K Gowda', description: 'Six controlled investigations. Real Windows telemetry, authored detections, and evidence-backed analyst decisions.', alternates: { canonical: '/lab' } };
export default function LabLayout({children}: {children: React.ReactNode}) { return <div className="cyberlab">{children}</div>; }
