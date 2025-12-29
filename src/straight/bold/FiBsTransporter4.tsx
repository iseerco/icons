import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTransporter4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4.667,16.686l-1.167,2.333-1.167-2.333-2.333-1.167,2.333-1.167,1.167-2.333,1.167,2.333,2.333,1.167-2.333,1.167ZM21.5,2.5l-1-2-1,2-2,1,2,1,1,2,1-2,2-1-2-1ZM4,24h16v-3H4v3Zm12-5v-3h-8v3h8Zm1-8H7v3h10v-3Zm1-5H6v3h12v-3Zm-3-5h-6v3h6V1Z"/></svg>

);
