import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BlindsOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,7H0v-2H18v2Zm0,3H0v2H18v-2Zm0,5H0v2H18v-2ZM0,22H16v-2H0v2Zm24-1c0,1.654-1.346,3-3,3s-3-1.346-3-3c0-1.304,.836-2.415,2-2.828V3c0-.551-.448-1-1-1H0V0H19c1.654,0,3,1.346,3,3v15.172c1.164,.413,2,1.524,2,2.828Zm-2,0c0-.552-.448-1-1-1s-1,.448-1,1,.448,1,1,1,1-.448,1-1Z"/></svg>

);
