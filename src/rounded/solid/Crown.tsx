import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Crown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.766,4.566A1.994,1.994,0,0,0,20.586,5L18,7.586,13.414,3a2,2,0,0,0-2.828,0L6,7.586,3.414,5A2,2,0,0,0,0,6.414V17a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6.414A2,2,0,0,0,22.766,4.566Z"/></svg>

);
