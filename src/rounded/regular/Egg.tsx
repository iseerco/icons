import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Egg = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24A10.011,10.011,0,0,1,2,14C2,8.493,6.294,0,12,0S22,8.493,22,14A10.011,10.011,0,0,1,12,24ZM12,2C7.739,2,4,9.479,4,14a8,8,0,0,0,16,0C20,9.479,16.261,2,12,2Zm2,9.5a1.5,1.5,0,0,0,3,0A1.5,1.5,0,0,0,14,11.5ZM13,7a1,1,0,0,0,2,0A1,1,0,0,0,13,7Z"/></svg>

);
