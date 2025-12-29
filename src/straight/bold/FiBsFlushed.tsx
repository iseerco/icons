import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFlushed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm0,21a9.011,9.011,0,0,1-9-9C3.453.077,20.549.08,21,12A9.01,9.01,0,0,1,12,21ZM8,15h8v3H8Zm8-8a3,3,0,0,0,0,6A3,3,0,0,0,16,7Zm0,4a1,1,0,0,1,0-2A1,1,0,0,1,16,11Zm-5-1a3,3,0,0,0-6,0A3,3,0,0,0,11,10ZM7,10a1,1,0,0,1,2,0A1,1,0,0,1,7,10Z"/></svg>

);
