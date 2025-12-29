import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrEnvelopePlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12.5v6A5.506,5.506,0,0,1,18.5,24H5.5A5.506,5.506,0,0,1,0,18.5V8.5A5.506,5.506,0,0,1,5.5,3h4a1.5,1.5,0,0,1,0,3h-4A2.493,2.493,0,0,0,3.3,7.336l6.931,6.932a2.562,2.562,0,0,0,3.536,0l1.224-1.3a1.5,1.5,0,1,1,2.182,2.06l-1.255,1.328a5.521,5.521,0,0,1-7.808.032L3,11.278V18.5A2.5,2.5,0,0,0,5.5,21h13A2.5,2.5,0,0,0,21,18.5v-6A1.5,1.5,0,0,1,24,12.5ZM14.5,7H17V9.5a1.5,1.5,0,0,0,3,0V7h2.5a1.5,1.5,0,0,0,0-3H20V1.5a1.5,1.5,0,0,0-3,0V4H14.5A1.5,1.5,0,0,0,14.5,7Z"/></svg>

);
