import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrLabel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.214,4.392l-7.48-4.2a1.5,1.5,0,0,0-1.468,0l-7.48,4.2A3.505,3.505,0,0,0,2,7.443V17.5A6.508,6.508,0,0,0,8.5,24h7A6.508,6.508,0,0,0,22,17.5V7.443A3.506,3.506,0,0,0,20.214,4.392ZM19,17.5A3.5,3.5,0,0,1,15.5,21h-7A3.5,3.5,0,0,1,5,17.5V7.443a.5.5,0,0,1,.255-.436L12,3.221l6.744,3.786A.5.5,0,0,1,19,7.443Z"/><circle cx="12" cy="9" r="2"/></svg>

);
