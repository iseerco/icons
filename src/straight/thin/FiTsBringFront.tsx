import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBringFront = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,18H6V8.5c0-1.38,1.12-2.5,2.5-2.5h7c1.38,0,2.5,1.12,2.5,2.5v9.5Zm-11-1h10V8.5c0-.83-.67-1.5-1.5-1.5h-7c-.83,0-1.5,.67-1.5,1.5v8.5Zm-3-7H1V2.5c0-.83,.67-1.5,1.5-1.5h6c.83,0,1.5,.67,1.5,1.5v1.5h1v-1.5c0-1.38-1.12-2.5-2.5-2.5H2.5C1.12,0,0,1.12,0,2.5V11H4v-1Zm20,5.5c0-1.38-1.12-2.5-2.5-2.5h-1.5v1h1.5c.83,0,1.5,.67,1.5,1.5v7.5H14v-3h-1v4h11V15.5Z"/></svg>

);
