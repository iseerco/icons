import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCircleHeart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,10.7c0,2.83-5,6.3-5,6.3,0,0-5-3.47-5-6.3,0-1.49,1.12-2.7,2.5-2.7s2.5,.96,2.5,2.45c0-1.49,1.12-2.45,2.5-2.45s2.5,1.21,2.5,2.7Zm7,1.3C24,5.38,18.62,0,12,0S0,5.38,0,12s5.38,12,12,12,12-5.38,12-12Zm-3,0c0,4.96-4.04,9-9,9S3,16.96,3,12,7.04,3,12,3s9,4.04,9,9Z"/></svg>

);
