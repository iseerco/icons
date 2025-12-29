import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShoppingBasket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.941,8C20.442,3.507,16.625,0,12,0S3.558,3.507,3.059,8H-.021l1.918,13.425c.21,1.468,1.486,2.575,2.97,2.575h14.266c1.483,0,2.76-1.107,2.97-2.575l1.918-13.425h-3.079ZM12,2c3.519,0,6.432,2.614,6.92,6H5.08c.488-3.386,3.401-6,6.92-6Zm-4,18h-2V12h2v8Zm5,0h-2V12h2v8Zm5,0h-2V12h2v8Z"/></svg>

);
