import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTrainSide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.5,1H0V4H3V7H0v3H19.161a12.4,12.4,0,0,1,1.749,5H0v3H24V16.5A15.517,15.517,0,0,0,8.5,1Zm8.1,6H12V4.5A12.477,12.477,0,0,1,16.6,7ZM6,4H8.5c.169,0,.333.017.5.023V7H6ZM0,20H24v3H0Z"/></svg>

);
