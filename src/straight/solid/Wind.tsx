import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Wind = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,15a4,4,0,0,1-8,0h2a2,2,0,1,0,2-2H10V11h7a3,3,0,1,0-3-3V9H12V8a4.99,4.99,0,1,1,8.886,3.107A4,4,0,0,1,24,15ZM8,11H0v2H8Zm3-7A4,4,0,0,0,3,4H5A2,2,0,1,1,7,6H0V8H7A4,4,0,0,0,11,4Zm0,12H0v2H11a2,2,0,1,1-2,2H7a4,4,0,1,0,4-4Z"/></svg>

);
