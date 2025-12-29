import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Starfighter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6,22,2,18v3H0V6H2v8H6ZM22,6v8H18v8l4-4v3h2V6ZM12,5a7.053,7.053,0,0,1,3.217.759C14-1.9,10-1.9,8.783,5.759A7.053,7.053,0,0,1,12,5Zm3.608,3.461a5.2,5.2,0,0,0-7.216,0c-.253,2.231-.343,4.346-.375,5.539H8V24h2V22h4v2h2V14h-.017C15.951,12.807,15.861,10.692,15.608,8.461Z"/></svg>

);
