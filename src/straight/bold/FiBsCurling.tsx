import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCurling = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.782,9.127,18,6H8.037l.58-2.609A.5.5,0,0,1,9.1,3H17V0H9.1A3.478,3.478,0,0,0,5.688,2.74L4.2,9.419A6.512,6.512,0,0,0,0,15.5v2A6.508,6.508,0,0,0,6.5,24h11A6.508,6.508,0,0,0,24,17.5v-2A6.512,6.512,0,0,0,18.782,9.127ZM6.5,12h11a3.5,3.5,0,0,1,3.464,3H3.036A3.5,3.5,0,0,1,6.5,12Zm11,9H6.5a3.5,3.5,0,0,1-3.464-3H20.964A3.5,3.5,0,0,1,17.5,21Z"/></svg>

);
