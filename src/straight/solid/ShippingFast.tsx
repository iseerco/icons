import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShippingFast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10,3H0V1h10v2Zm-2,2H0v2h8v-2Zm-2,4H0v2h6v-2ZM12,1v4h-2v4h-2v4H0v5h15V4c0-1.654-1.346-3-3-3Zm7.5,22c1.381,0,2.5-1.119,2.5-2.5,0-.172-.024-.338-.058-.5h-4.885c-.034.162-.058.328-.058.5,0,1.381,1.119,2.5,2.5,2.5m-14,0c1.381,0,2.5-1.119,2.5-2.5,0-.172-.024-.338-.058-.5H3.058c-.034.162-.058.328-.058.5,0,1.381,1.119,2.5,2.5,2.5m11.5-5h7v-5h-7v5Zm2-13h-2v6h7v-1c0-2.757-2.243-5-5-5Z"/>
</svg>

);
