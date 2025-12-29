import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUnlock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,8V7.151A4,4,0,0,1,15.494,5.2l2.618-1.465A7,7,0,0,0,5,7.151V8H2V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8ZM5,21V11H19l0,10Z"/><rect x="10" y="14" width="4" height="3"/></svg>

);
