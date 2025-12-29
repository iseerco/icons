import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCircleHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,24h-2C5.38,24,0,18.62,0,12S5.38,0,12,0h2V24ZM11,3.06C6.51,3.55,3,7.38,3,12s3.51,8.45,8,8.94V3.06Z"/></svg>

);
