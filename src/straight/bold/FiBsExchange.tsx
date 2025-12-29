import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsExchange = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,18.957H4.707l1.9,1.9L4.482,22.975l-3.75-3.75a2.5,2.5,0,0,1,0-3.536l3.75-3.75L6.6,14.061l-1.9,1.9H24ZM17.4,9.9l2.122,2.122,3.75-3.75a2.5,2.5,0,0,0,0-3.536L19.518.982,17.4,3.1l1.9,1.9H0V8H19.293Z"/></svg>

);
