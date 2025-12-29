import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Flushed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,10a1,1,0,0,1-2,0A1,1,0,0,1,17,10ZM9,10a1,1,0,0,0-2,0A1,1,0,0,0,9,10Zm15,2A12.013,12.013,0,0,1,12,24C-3.9,23.4-3.893.6,12,0A12.013,12.013,0,0,1,24,12ZM8,13A3,3,0,0,0,8,7,3,3,0,0,0,8,13Zm8,3H8v2h8Zm3-6a3,3,0,0,0-6,0A3,3,0,0,0,19,10Z"/></svg>

);
