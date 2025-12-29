import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Betamax = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.58,6H.42c.77-1.76,2.53-3,4.58-3h14c2.05,0,3.81,1.24,4.58,3ZM7,12c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm17-4v8c0,2.76-2.24,5-5,5H5c-2.76,0-5-2.24-5-5V8H24Zm-13,6c0-2.21-1.79-4-4-4s-4,1.79-4,4,1.79,4,4,4,4-1.79,4-4Zm10-2c0-1.1-.9-2-2-2h-4c-1.1,0-2,.9-2,2v4c0,1.1,.9,2,2,2h4c1.1,0,2-.9,2-2v-4Zm-2,0h-4v4h4v-4Z"/></svg>

);
