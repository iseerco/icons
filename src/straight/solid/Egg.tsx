import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Egg = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C6.294,0,2,8.493,2,14a10,10,0,0,0,20,0C22,8.493,17.706,0,12,0Zm1,7a1,1,0,1,1,1,1A1,1,0,0,1,13,7Zm2.5,6A1.5,1.5,0,1,1,17,11.5,1.5,1.5,0,0,1,15.5,13Z"/></svg>

);
