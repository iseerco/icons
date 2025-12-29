import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMug = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,6H19V3.908A1.5,1.5,0,0,0,18.5,1H1.5A1.5,1.5,0,0,0,1,3.908V17.5A5.506,5.506,0,0,0,6.5,23h7a5.506,5.506,0,0,0,5.475-5A.19.19,0,0,0,19,18h1a4,4,0,0,0,4-4V10A4,4,0,0,0,20,6ZM13.5,20h-7A2.5,2.5,0,0,1,4,17.5V9h8.5a1.5,1.5,0,0,0,0-3H4V4H16V17.5A2.5,2.5,0,0,1,13.5,20ZM21,14a1,1,0,0,1-1,1H19V9h1a1,1,0,0,1,1,1Z"/></svg>

);
