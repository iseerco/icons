import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Table = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0,7C0,4.243,2.243,2,5,2h14c2.757,0,5,2.243,5,5H0Zm11,2H0v5h11v-5Zm13,0h-11v5h11v-5Zm-13,7H0v1c0,2.757,2.243,5,5,5h6v-6Zm2,0v6h6c2.757,0,5-2.243,5-5v-1h-11Z"/></svg>

);
