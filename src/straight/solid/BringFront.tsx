import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BringFront = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,18H6V9c0-1.65,1.35-3,3-3h6c1.65,0,3,1.35,3,3v9ZM11,3c0-1.66-1.34-3-3-3H3C1.34,0,0,1.34,0,3V11H4v-2c0-2.76,2.24-5,5-5h2v-1Zm10,10h-1v7h-7v4h11v-8c0-1.65-1.35-3-3-3Z"/></svg>

);
