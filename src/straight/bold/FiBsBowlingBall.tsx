import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBowlingBall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,3a9,9,0,1,0,9,9A9.01,9.01,0,0,0,12,3Zm-2,8.5A1.5,1.5,0,1,0,11.5,10,1.5,1.5,0,0,0,10,11.5ZM6.5,9A1.5,1.5,0,1,0,8,10.5,1.5,1.5,0,0,0,6.5,9Zm3-4A1.5,1.5,0,1,0,11,6.5,1.5,1.5,0,0,0,9.5,5Z"/></svg>

);
