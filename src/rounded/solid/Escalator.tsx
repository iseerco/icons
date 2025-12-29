import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Escalator = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8.5,0C9.881,0,11,1.119,11,2.5s-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5S7.119,0,8.5,0Zm.544,22.58l11.322-9.58h.134c1.93,0,3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5h-1.669c-1.417,0-2.793.504-3.875,1.42L3.634,17h-.134c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5h1.669c1.417,0,2.793-.504,3.875-1.42Zm2.455-14.855c-.611-1.027-1.72-1.725-2.999-1.725-1.93,0-3.5,1.57-3.5,3.5v3.725l6.499-5.5Z"/></svg>

);
