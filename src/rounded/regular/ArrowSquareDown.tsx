import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowSquareDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Zm-4.293-5.879a1,1,0,0,0-1.414,0L13,16.413,12.993,6a1,1,0,0,0-2,0L11,16.414,7.707,13.121A1,1,0,1,0,6.269,14.51l.024.025,3.585,3.586a3,3,0,0,0,4.243,0h0l3.586-3.586A1,1,0,0,0,17.707,13.121Z"/></svg>

);
