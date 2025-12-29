import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowLeftFromLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4.71,10.5h14.29v3H4.71l3.65,3.65-2.12,2.12L.73,13.77c-.97-.97-.97-2.56,0-3.54L6.23,4.73l2.12,2.12-3.65,3.65ZM21,0V24h3V0h-3Z"/></svg>

);
