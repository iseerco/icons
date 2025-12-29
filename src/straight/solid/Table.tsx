import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Table = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,14h-11v-6h11v6Zm0-8v-1c0-1.654-1.346-3-3-3H3c-1.654,0-3,1.346-3,3v1h24Zm-13,10H0v6h11v-6Zm2,0v6h11v-6h-11ZM0,14h11v-6H0v6Z"/></svg>

);
