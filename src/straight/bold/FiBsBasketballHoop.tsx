import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBasketballHoop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,18V4.5A4.505,4.505,0,0,0,19.5,0H4.5A4.505,4.505,0,0,0,0,4.5V18H5.7L6,20.587V24H9V22h1.5v2h3V22H15v2h3V20.811L18.324,18ZM3,15V4.5A1.5,1.5,0,0,1,4.5,3h15A1.5,1.5,0,0,1,21,4.5V15H18.67l.347-3H5.009l.346,3Zm12.189,4H8.837l-.462-4H15.65ZM17,10H7V6H17Z"/></svg>

);
