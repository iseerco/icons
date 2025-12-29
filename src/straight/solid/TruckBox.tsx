import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckBox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8,0H2C.895,0,0,.895,0,2v8h10V2c0-1.105-.895-2-2-2Zm-1.5,5h-3v-2h3v2Zm-3.442,16c-.034.162-.058.328-.058.5,0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-.172-.024-.338-.058-.5H3.058ZM12,2v10H0v7h15V5c0-1.654-1.346-3-3-3Zm5.058,19c-.034.162-.058.328-.058.5,0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-.172-.024-.338-.058-.5h-4.885Zm-.058-2h7v-5h-7v5Zm2-13h-2v6h7v-1c0-2.757-2.243-5-5-5Z"/>
</svg>

);
