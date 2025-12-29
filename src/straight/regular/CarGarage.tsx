import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CarGarage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.447,8.658A2.984,2.984,0,0,0,16.764,7H7.236A2.984,2.984,0,0,0,4.553,8.658L2.267,13.23A12.059,12.059,0,0,0,1,18.6V22H3v2H8V22h8v2h5V22h2V18.6a12.059,12.059,0,0,0-1.267-5.367Zm-13.1.9A.994.994,0,0,1,7.236,9h9.528a.994.994,0,0,1,.894.553L19.882,14H4.118ZM21,20H3V18.6A10,10,0,0,1,3.345,16H5v1a1,1,0,0,0,2,0V16H17v1a1,1,0,0,0,2,0V16h1.655A10,10,0,0,1,21,18.6ZM23.94,5.528l-.883,1.8L12.441,2.1a1,1,0,0,0-.883,0L.943,7.323.06,5.528,10.676.308a3.017,3.017,0,0,1,2.648,0Z"/></svg>

);
