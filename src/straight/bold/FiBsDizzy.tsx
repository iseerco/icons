import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDizzy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm0,21a9.011,9.011,0,0,1-9-9C3.453.077,20.549.08,21,12A9.011,9.011,0,0,1,12,21Zm2.5-4.5a2.5,2.5,0,0,1-5,0A2.5,2.5,0,0,1,14.5,16.5ZM18.121,10l1.44,1.439-2.122,2.122L16,12.121l-1.439,1.44-2.122-2.122L13.879,10l-1.44-1.439,2.122-2.122L16,7.879l1.439-1.44,2.122,2.122ZM9.439,13.561,8,12.121l-1.439,1.44L4.439,11.439,5.879,10,4.439,8.561,6.561,6.439,8,7.879l1.439-1.44,2.122,2.122L10.121,10l1.44,1.439Z"/></svg>

);
