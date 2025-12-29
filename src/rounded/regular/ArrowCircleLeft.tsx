import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowCircleLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12ZM2,12A10,10,0,1,1,12,22,10.011,10.011,0,0,1,2,12Zm8.879,5.707a1,1,0,0,0,0-1.414L7.587,13,18,12.993a1,1,0,0,0,0-2L7.586,11l3.293-3.293A1,1,0,1,0,9.49,6.269l-.025.024L5.879,9.878a3,3,0,0,0,0,4.243h0l3.586,3.586A1,1,0,0,0,10.879,17.707Z"/></svg>

);
