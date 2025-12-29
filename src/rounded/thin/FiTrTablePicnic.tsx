import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrTablePicnic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.179,14h2.321c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-2.763l-3.971-9h3.733c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-4.495c-.007,0-.013,0-.02,0H3.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h3.733L3.263,13H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H2.821L.043,20.298c-.112,.253,.003,.548,.255,.659,.066,.029,.135,.043,.202,.043,.191,0,.375-.111,.457-.298l2.957-6.702H20.086l2.957,6.702c.082,.187,.266,.298,.457,.298,.067,0,.136-.014,.202-.043,.252-.111,.367-.406,.255-.659l-2.778-6.298Zm-16.824-1l3.971-9h7.349l3.971,9H4.355Z"/></svg>

);
