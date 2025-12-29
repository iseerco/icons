import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Laugh = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2ZM7,14c.05,1.995,2,5,5.007,5S17,16,17,14ZM6,10v1h4V10a2,2,0,0,0-4,0Zm8,0v1h4V10a2,2,0,0,0-4,0Z"/></svg>

);
