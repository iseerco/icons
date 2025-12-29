import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LaughBeam = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0ZM6,12a1,1,0,0,1-1-1C5,9.108,6.232,7,8,7s3,2.108,3,4a1,1,0,0,1-2,0c0-1.054-.679-2-1-2s-1,.946-1,2A1,1,0,0,1,6,12Zm10.949,3.293a5.178,5.178,0,0,1-9.9.007A.994.994,0,0,1,8.009,14H15.99A.994.994,0,0,1,16.949,15.293ZM18,12a1,1,0,0,1-1-1c0-1.054-.679-2-1-2s-1,.946-1,2a1,1,0,0,1-2,0c0-1.892,1.232-4,3-4s3,2.108,3,4A1,1,0,0,1,18,12Z"/></svg>

);
