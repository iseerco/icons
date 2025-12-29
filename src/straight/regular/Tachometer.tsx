import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tachometer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,1C.374.982-4.414,16.17,5.112,22.818L5.371,23H18.629l.259-.182C28.418,16.166,23.621.98,12,1Zm5.988,20H6.012C-1.633,15.321,2.47,2.976,12,3,21.53,2.976,25.633,15.322,17.988,21Zm-1.2-14.207,1.414,1.414-4.275,4.275a2,2,0,1,1-1.414-1.414Z"/></svg>

);
