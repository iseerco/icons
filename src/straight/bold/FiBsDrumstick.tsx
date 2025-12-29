import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDrumstick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,2.5a8.539,8.539,0,0,0-12.064,0C6.361,5.574,6.029,12.82,6,13.637l-.022.651.806.806L3.348,18.531A2,2,0,1,0,2,22a2,2,0,1,0,3.469-1.348l3.437-3.437.806.806L10.363,18c.817-.028,8.063-.36,11.138-3.436A8.57,8.57,0,0,0,21.5,2.5ZM19.38,12.442c-1.719,1.719-6.23,2.366-8.48,2.524L9.035,13.1c.158-2.188.814-6.772,2.523-8.481C16.9-.388,24.389,7.124,19.38,12.442Z"/></svg>

);
