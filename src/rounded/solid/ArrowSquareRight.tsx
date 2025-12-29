import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowSquareRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5ZM14.535,6.293l3.586,3.586h0a3,3,0,0,1,0,4.243l-3.586,3.585-.025.024a1,1,0,1,1-1.389-1.438L16.414,13,6,13.007a1,1,0,1,1,0-2L16.413,11,13.121,7.707a1,1,0,1,1,1.414-1.414Z"/></svg>

);
