import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HeartRate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="16.494 23.525 11.937 7.442 7.577 20.902 4.33 13 0 13 0 11 5.67 11 7.354 15.098 12.063 .558 16.574 16.475 18.262 11 24 11 24 13 19.738 13 16.494 23.525"/></svg>

);
