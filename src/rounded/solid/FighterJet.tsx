import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FighterJet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.5,9,11,2h2a1,1,0,0,0,0-2s-2.355-.022-2.442,0A3.043,3.043,0,0,0,8,3V9H5L3.01,6.613A1.712,1.712,0,0,0,0,7.7v8.6a1.712,1.712,0,0,0,3.01,1.089L5,15H8v6a3.051,3.051,0,0,0,2.5,3c.1.031,2.5,0,2.5,0a1,1,0,0,0,0-2H11l4.5-7c3.958-.294,8.5-.674,8.5-3S19.459,9.281,15.5,9Z"/></svg>

);
