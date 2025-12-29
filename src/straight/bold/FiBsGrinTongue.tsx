import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGrinTongue = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,11A2,2,0,0,1,8,7,2,2,0,0,1,8,11Z"/><path d="M16,7a2,2,0,0,0,0,4A2,2,0,0,0,16,7Z"/><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm0,21a9.01,9.01,0,0,1-9-9C3.452.077,20.549.08,21,12A9.01,9.01,0,0,1,12,21Z"/><path d="M7,13H17v3H14.5c-.085,3.954-4.917,3.95-5,0H7Z"/></svg>

);
