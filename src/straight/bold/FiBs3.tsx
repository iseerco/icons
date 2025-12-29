import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBs3 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,16.5c0,4.136-3.364,7.5-7.5,7.5H4v-3H12.5c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5H6v-3h6c1.654,0,3-1.346,3-3s-1.346-3-3-3H4V0H12c3.309,0,6,2.691,6,6,0,1.582-.62,3.019-1.624,4.092,2.168,1.316,3.624,3.692,3.624,6.408Z"/></svg>

);
