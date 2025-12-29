import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCircleThreeQuarters = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.38,24,0,18.62,0,12S5.38,0,12,0h2V10h10v2c0,6.62-5.38,12-12,12ZM11,3.06C6.51,3.55,3,7.38,3,12c0,4.96,4.04,9,9,9,4.62,0,8.45-3.51,8.94-8H11V3.06Z"/></svg>

);
