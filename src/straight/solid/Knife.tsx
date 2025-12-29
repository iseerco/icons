import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Knife = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.668.14A2.214,2.214,0,0,0,20.226.7L-.011,22.624l1.466,1.359,5.494-5.9c13-1.19,17.039-11.846,17.039-15.593V2.132A2.094,2.094,0,0,0,22.668.14Z"/></svg>

);
