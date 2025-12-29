import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BagShoppingMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,19c0,.552-.448,1-1,1h-6c-.552,0-1-.448-1-1s.448-1,1-1h6c.552,0,1,.448,1,1Zm0-10v5.537c-1.062-.952-2.461-1.537-4-1.537-3.314,0-6,2.686-6,6,0,2.088,1.068,3.925,2.686,5H5c-2.757,0-5-2.243-5-5V9c0-1.654,1.346-3,3-3h3C6,2.691,8.691,0,12,0s6,2.691,6,6h3c1.654,0,3,1.346,3,3Zm-8-3c0-2.206-1.794-4-4-4s-4,1.794-4,4h8Z"/>
</svg>

);
