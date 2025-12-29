import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBowlingBall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,21a9,9,0,1,1,9-9A9.01,9.01,0,0,1,12,21Zm1-9.5A1.5,1.5,0,1,1,11.5,10,1.5,1.5,0,0,1,13,11.5Zm-5-1A1.5,1.5,0,1,1,6.5,9,1.5,1.5,0,0,1,8,10.5ZM9.5,8A1.5,1.5,0,1,1,11,6.5,1.5,1.5,0,0,1,9.5,8Z"/></svg>

);
