import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiceD4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,0a2.962,2.962,0,0,1,1.419,1.036L24,15.236,13,24ZM11,0A2.962,2.962,0,0,0,9.581,1.036L0,15.236,11,24Z"/></svg>

);
