import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlanetMoon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><circle cx="21.5" cy="2.5" r="2.5"/><path d="m10.5,3C4.71,3,0,7.71,0,13.5s4.71,10.5,10.5,10.5,10.5-4.71,10.5-10.5S16.29,3,10.5,3Zm1.5,16h-2v-3l-2-2v-2l-1-1h-3l-1.141-1.199c1.354-2.784,4.177-4.721,7.458-4.791-.194.299-.317.491-.317.491l1.5,2.5-1,1-2-1-1.5,1.5,1.5,1.5h2.5l4,2.5-3,5.5Z"/></svg>

);
