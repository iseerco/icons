import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TablePicnic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.916,19.6l-2.45-5.6h1.534c.553,0,1-.447,1-1s-.447-1-1-1h-2.409l-3.062-7h2.471c.553,0,1-.447,1-1s-.447-1-1-1H4c-.553,0-1,.447-1,1s.447,1,1,1h2.471l-3.062,7H1c-.553,0-1,.447-1,1s.447,1,1,1h1.534L.084,19.6c-.222,.506,.009,1.095,.516,1.316,.13,.058,.266,.084,.399,.084,.386,0,.753-.224,.917-.6l2.8-6.4h14.568l2.8,6.4c.164,.376,.531,.6,.917,.6,.134,0,.27-.026,.399-.084,.507-.222,.737-.811,.516-1.316ZM5.591,12l3.062-7h6.693l3.062,7H5.591Z"/></svg>

);
