import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPaintRoller = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,4h-.5V0H0V9H21V5h.5c.827,0,1.5,.673,1.5,1.5v3c0,.827-.673,1.5-1.5,1.5H12.5c-1.378,0-2.5,1.121-2.5,2.5v1.551c-1.14,.232-2,1.242-2,2.449v6.5h5v-6.5c0-1.208-.86-2.217-2-2.449v-1.551c0-.827,.673-1.5,1.5-1.5h9c1.378,0,2.5-1.121,2.5-2.5v-3c0-1.379-1.122-2.5-2.5-2.5Zm-1.5,4H1V1H20v7Zm-8,9.5v5.5h-3v-5.5c0-.827,.673-1.5,1.5-1.5s1.5,.673,1.5,1.5Z"/></svg>

);
