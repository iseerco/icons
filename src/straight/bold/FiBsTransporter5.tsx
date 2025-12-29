import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTransporter5 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7,14v-3h10v3H7ZM15,1h-6v3h6V1Zm3,5H6v3h12v-3ZM4,24h16v-3H4v3Zm17.667-9.647l-1.167-2.333-1.167,2.333-2.333,1.167,2.333,1.167,1.167,2.333,1.167-2.333,2.333-1.167-2.333-1.167ZM6.5,3.5l-2-1L3.5.5l-1,2L.5,3.5l2,1,1,2,1-2,2-1Z"/></svg>

);
