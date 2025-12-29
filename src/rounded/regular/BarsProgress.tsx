import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BarsProgress = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,11H20c2.206,0,4-1.794,4-4s-1.794-4-4-4H4C1.794,3,0,4.794,0,7s1.794,4,4,4ZM22,7c0,1.103-.897,2-2,2h-4V5h4c1.103,0,2,.897,2,2ZM4,5H14v4H4c-1.103,0-2-.897-2-2s.897-2,2-2ZM20,13H4c-2.206,0-4,1.794-4,4s1.794,4,4,4H20c2.206,0,4-1.794,4-4s-1.794-4-4-4ZM2,17c0-1.103,.897-2,2-2h4v4H4c-1.103,0-2-.897-2-2Zm18,2H10v-4h10c1.103,0,2,.897,2,2s-.897,2-2,2Z"/></svg>

);
