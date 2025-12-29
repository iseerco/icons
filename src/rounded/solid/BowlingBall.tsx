import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BowlingBall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0ZM6,11a1,1,0,1,1,1-1A1,1,0,0,1,6,11ZM8,8A1,1,0,1,1,9,7,1,1,0,0,1,8,8Zm2,3a1,1,0,1,1,1-1A1,1,0,0,1,10,11Z"/></svg>

);
