import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Picpeople = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,2H5C2.24,2,0,4.24,0,7v10c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V7c0-2.76-2.24-5-5-5ZM8.54,20c.7-1.21,2.01-2,3.46-2s2.76,.79,3.46,2h-6.93Zm13.46-3c0,1.65-1.35,3-3,3h-1.34c-.84-2.36-3.1-4-5.66-4s-4.82,1.64-5.66,4h-1.34c-1.65,0-3-1.35-3-3V7c0-1.65,1.35-3,3-3h14c1.65,0,3,1.35,3,3v10ZM12,6c-2.21,0-4,1.79-4,4s1.79,4,4,4,4-1.79,4-4-1.79-4-4-4Zm0,6c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z"/></svg>

);
