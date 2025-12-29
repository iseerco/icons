import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Blinds = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,12H18v4H0v-4Zm0-2H18V6H0v4Zm17.033,8H0v4H16.11c-.066-.324-.11-.656-.11-1,0-1.135,.391-2.168,1.033-3Zm6.967,3c0,1.654-1.346,3-3,3s-3-1.346-3-3c0-1.302,.839-2.402,2-2.816V3c0-.551-.448-1-1-1h-1v2H0v-1C0,1.346,1.346,0,3,0H19c1.654,0,3,1.346,3,3v15.184c1.161,.414,2,1.514,2,2.816Z"/></svg>

);
