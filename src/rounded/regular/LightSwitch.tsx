import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LightSwitch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,0H7C4.243,0,2,2.243,2,5v14c0,2.757,2.243,5,5,5h10c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,19c0,1.654-1.346,3-3,3H7c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3v14ZM15,4h-6c-1.103,0-2,.897-2,2v12c0,1.103,.897,2,2,2h6c1.103,0,2-.897,2-2V6c0-1.103-.897-2-2-2Zm0,2v5h-6V6h6Zm-6,12v-5h6.001v5h-6.001Z"/></svg>

);
