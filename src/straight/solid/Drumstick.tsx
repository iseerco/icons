import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Drumstick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.511,2.49a8.508,8.508,0,0,0-12.021,0C6.318,5.661,6.012,13.628,6,13.966l-.014.434,1.1,1.1L2.807,19.779a1.5,1.5,0,1,0-.649,2.063,1.5,1.5,0,1,0,2.063-.649L8.5,16.914l1.1,1.1L10.034,18c.338-.012,8.3-.318,11.477-3.49A8.509,8.509,0,0,0,21.511,2.49Z"/></svg>

);
