import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HatChef = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,6A5.006,5.006,0,0,1,5,1a4.939,4.939,0,0,1,2.713.8,6,6,0,0,1,8.574,0A4.939,4.939,0,0,1,19,1a5,5,0,0,1,1,9.9V18H4V10.9A5.008,5.008,0,0,1,0,6ZM4,20v4H20V20Z"/></svg>

);
