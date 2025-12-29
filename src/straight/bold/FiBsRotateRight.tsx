import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRotateRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,12a9.038,9.038,0,1,1-2.647-6.353L16,8h5.909A1.09,1.09,0,0,0,23,6.909V1L20.471,3.529A11.98,11.98,0,1,0,24,12Z"/></svg>

);
