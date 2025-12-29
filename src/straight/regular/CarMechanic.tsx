import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CarMechanic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.447,8.658A2.985,2.985,0,0,0,16.764,7H7.236A2.984,2.984,0,0,0,4.553,8.658L2.267,13.23A12.059,12.059,0,0,0,1,18.6V22H3v2H8V22h8v2h5V22h2V18.6a12.059,12.059,0,0,0-1.267-5.367Zm-13.1.9A.994.994,0,0,1,7.236,9h9.528a.993.993,0,0,1,.894.553L19.882,14H4.118ZM21,20H3V18.6A10,10,0,0,1,3.345,16H5v1a1,1,0,0,0,2,0V16H17v1a1,1,0,0,0,2,0V16h1.655A10,10,0,0,1,21,18.6ZM21,4h2.816a3.009,3.009,0,0,1-5.645,0H5.829A3.009,3.009,0,0,1,.184,4H3V2H.184A3.009,3.009,0,0,1,5.829,2H18.171a3.009,3.009,0,0,1,5.645,0H21Z"/></svg>

);
