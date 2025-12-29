import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowCircleLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12ZM9.465,17.707,5.879,14.121h0a3,3,0,0,1,0-4.243L9.465,6.293l.025-.024a1,1,0,1,1,1.389,1.438L7.586,11,18,10.993a1,1,0,0,1,0,2L7.587,13l3.292,3.293a1,1,0,1,1-1.414,1.414Z"/></svg>

);
