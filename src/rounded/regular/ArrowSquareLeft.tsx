import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowSquareLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,19V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19A5.006,5.006,0,0,0,24,19ZM5,22a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19a3,3,0,0,1-3,3Zm5.879-4.293a1,1,0,0,0,0-1.414L7.587,13,18,12.993a1,1,0,0,0,0-2L7.586,11l3.293-3.293A1,1,0,1,0,9.49,6.269l-.025.024L5.879,9.878a3,3,0,0,0,0,4.243h0l3.586,3.586A1,1,0,0,0,10.879,17.707Z"/></svg>

);
