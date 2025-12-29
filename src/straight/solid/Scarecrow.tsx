import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Scarecrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,10H0v2h2v3h3v7h6v2h2v-2h6v-7h3v-3h2v-2ZM8,6h8c0,2.209-1.791,4-4,4s-4-1.791-4-4Zm10-4v2H6v-2h2.014c.075-1.114.995-2,2.128-2h3.715c1.133,0,2.053.886,2.128,2h2.014Z"/></svg>

);
