import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bolt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.566,24H8.719l2-8H6.586a2.561,2.561,0,0,1-2.451-3.3L7.976,0h9.467l-3,8h4.023a2.533,2.533,0,0,1,2.11,3.932Z"/></svg>

);
