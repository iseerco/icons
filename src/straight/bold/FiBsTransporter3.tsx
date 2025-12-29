import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTransporter3 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm-4.333,2.167l2.333-1.167-2.333-1.167-1.167-2.333-1.167,2.333L.5,3.5l2.333,1.167,1.167,2.333,1.167-2.333Zm16.833,10.833l-1-2-1,2-2,1,2,1,1,2,1-2,2-1-2-1ZM4,24h16v-3H4v3Zm12-5v-3h-8v3h8Zm1-8H7v3h10v-3Zm1-5H6v3h12v-3Z"/></svg>

);
