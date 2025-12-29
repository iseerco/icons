import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDizzy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm0,21a9.011,9.011,0,0,1-9-9C3.453.077,20.549.08,21,12A9.011,9.011,0,0,1,12,21Zm2-4a2,2,0,0,1-4,0A2,2,0,0,1,14,17Z"/><g><path d="M18.121,10l.44-.439a1.5,1.5,0,0,0-2.122-2.122L16,7.879l-.439-.44a1.5,1.5,0,0,0-2.122,2.122l.44.439-.44.439a1.5,1.5,0,0,0,2.122,2.122l.439-.44.439.44a1.5,1.5,0,0,0,2.122-2.122Z"/><path d="M10.561,7.439a1.5,1.5,0,0,0-2.122,0L8,7.879l-.439-.44A1.5,1.5,0,0,0,5.439,9.561l.44.439-.44.439a1.5,1.5,0,0,0,2.122,2.122L8,12.121l.439.44a1.5,1.5,0,0,0,2.122-2.122L10.121,10l.44-.439A1.5,1.5,0,0,0,10.561,7.439Z"/></g></svg>

);
