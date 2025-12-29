import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrLevelUpAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.087,7H13.5V18.5A5.507,5.507,0,0,1,8,24H1.5a1.5,1.5,0,0,1,0-3H8a2.5,2.5,0,0,0,2.5-2.5V7H6.913a.924.924,0,0,1-.644-1.575L11.356.27a.9.9,0,0,1,1.288,0l5.087,5.155A.924.924,0,0,1,17.087,7Z"/></svg>

);
