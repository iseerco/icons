import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Surprise = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24A12.013,12.013,0,0,1,0,12C.6-3.9,23.4-3.894,24,12A12.013,12.013,0,0,1,12,24ZM12,2A10.011,10.011,0,0,0,2,12c.5,13.248,19.5,13.244,20,0A10.011,10.011,0,0,0,12,2Zm0,12a3,3,0,0,0,0,6A3,3,0,0,0,12,14ZM8.5,8a1.5,1.5,0,0,0,0,3A1.5,1.5,0,0,0,8.5,8Zm7,0a1.5,1.5,0,0,0,0,3A1.5,1.5,0,0,0,15.5,8Z"/></svg>

);
