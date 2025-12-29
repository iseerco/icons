import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BagShoppingMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21,6h-3c0-3.309-2.691-6-6-6S6,2.691,6,6H3c-1.654,0-3,1.346-3,3v10c0,2.757,2.243,5,5,5H13c.552,0,1-.448,1-1s-.448-1-1-1H5c-1.654,0-3-1.346-3-3V9c0-.551,.449-1,1-1h3v2c0,.552,.448,1,1,1s1-.448,1-1v-2h8v2c0,.552,.448,1,1,1s1-.448,1-1v-2h3c.551,0,1,.449,1,1v6c0,.552,.448,1,1,1s1-.448,1-1v-6c0-1.654-1.346-3-3-3Zm-13,0c0-2.206,1.794-4,4-4s4,1.794,4,4H8Zm16,14c0,.552-.448,1-1,1h-6c-.552,0-1-.448-1-1s.448-1,1-1h6c.552,0,1,.448,1,1Z"/>
</svg>

);
