import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDrinkAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.255,6.27A3.373,3.373,0,0,0,18.61,5H15.064l.256-2H20V0H12.68l-.641,5H5.39A3.39,3.39,0,0,0,2.065,9.051L4.077,24H19.923L21.934,9.056A3.371,3.371,0,0,0,21.255,6.27ZM18.61,8a.378.378,0,0,1,.38.474L18.784,10H14.423l.256-2ZM5.086,8.146A.377.377,0,0,1,5.39,8h6.264L11.4,10H5.22L5.01,8.474A.379.379,0,0,1,5.086,8.146ZM6.7,21,5.624,13H18.379L17.3,21Zm4.057-6h3.025l-.513,4H10.244Z"/></svg>

);
