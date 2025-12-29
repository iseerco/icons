import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TachometerAltFastest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.525,1.009A12,12,0,0,0,5.112,22.818L5.371,23H18.629l.259-.182C28.6,16.026,23.412.546,11.525,1.009ZM6.051,19.753q-.213-.186-.415-.389a9,9,0,1,1,15.338-5.877l-1.992-.834c-.148-5.932-7.81-8.9-11.932-4.6a7.009,7.009,0,0,0,0,9.9c.1.1.209.2.317.3ZM12,15a2,2,0,1,1,1.972-2.275l6.246,2.613-.769,1.847-6.232-2.608A1.982,1.982,0,0,1,12,15Z"/></svg>

);
