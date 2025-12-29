import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BlindsOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,7H0v-2H18v2Zm0,3H0v2H18v-2Zm0,5H0v2H18v-2ZM0,22H16v-2H0v2Zm24-1c0,1.654-1.346,3-3,3s-3-1.346-3-3c0-1.302,.839-2.402,2-2.816V3c0-.551-.448-1-1-1H0V0H19c1.654,0,3,1.346,3,3v15.184c1.161,.414,2,1.514,2,2.816Z"/></svg>

);
