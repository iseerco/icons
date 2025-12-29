import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiceD4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.419,1.226a3,3,0,0,0-4.838,0L0,15.236l12,8.751,12-8.751Zm6.833,13.538L13,20.783V2.693ZM11,2.692V20.783L2.748,14.764Z"/></svg>

);
