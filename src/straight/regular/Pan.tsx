import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14-.008A9.981,9.981,0,0,0,5.144,14.6L-.008,19.753l4.24,4.239,5.151-5.151A9.99,9.99,0,1,0,14-.008ZM4.232,21.166,2.818,19.753l3.447-3.448a10.105,10.105,0,0,0,1.414,1.414ZM14,17.98a7.995,7.995,0,1,1,7.994-7.994A8,8,0,0,1,14,17.98Zm6-8a6,6,0,1,1-6-6v2a4,4,0,1,0,4,4Z"/></svg>

);
