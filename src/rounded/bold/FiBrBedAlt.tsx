import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBedAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,2H5.5C2.467,2,0,4.467,0,7.5v13c0,.828,.671,1.5,1.5,1.5s1.5-.672,1.5-1.5v-1.5H21v1.5c0,.828,.672,1.5,1.5,1.5s1.5-.672,1.5-1.5V7.5c0-3.033-2.468-5.5-5.5-5.5Zm.5,11v-.5c0-1.381-1.119-2.5-2.5-2.5h-1c-1.381,0-2.5,1.119-2.5,2.5v.5h-2v-.5c0-1.381-1.119-2.5-2.5-2.5h-1c-1.381,0-2.5,1.119-2.5,2.5v.5H3V7.5c0-1.378,1.122-2.5,2.5-2.5h13c1.379,0,2.5,1.122,2.5,2.5v5.5h-2Z"/></svg>

);
