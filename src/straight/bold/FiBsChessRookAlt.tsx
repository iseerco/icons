import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChessRookAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,19.036V9.662A3.5,3.5,0,0,0,21,6.5V0H3V6.5A3.5,3.5,0,0,0,5,9.662v9.374A3.5,3.5,0,0,0,2,22.5V24H22V22.5A3.5,3.5,0,0,0,19,19.036ZM6,3H8V5h3V3h2V5h3V3h2V6.5a.5.5,0,0,1-.5.5H16V19H8V7H6.5A.5.5,0,0,1,6,6.5Zm8,10H10V10a2,2,0,0,1,4,0Z"/></svg>

);
