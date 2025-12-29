import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Plate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24A12.013,12.013,0,0,1,0,12C.63-3.908,23.373-3.9,24,12A12.013,12.013,0,0,1,12,24ZM12,2A10.011,10.011,0,0,0,2,12c.525,13.257,19.477,13.253,20,0A10.011,10.011,0,0,0,12,2Zm8,10a1,1,0,0,0-2,0c-.251,7.929-11.749,7.928-12,0a6.006,6.006,0,0,1,6-6,1,1,0,0,0,0-2,8.009,8.009,0,0,0-8,8C4.376,22.588,19.626,22.586,20,12Z"/></svg>

);
