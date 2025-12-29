import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsInterlining = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><rect x="11" y="4" width="13" height="3"/><rect x="11" y="11" width="13" height="3"/><rect x="11" y="18" width="13" height="3"/><path d="M9,7,5.3,3.3a1.124,1.124,0,0,0-1.59,0L0,7H3V18H0l3.673,3.673a1.115,1.115,0,0,0,1.578,0L8.924,18H6V7Z"/></svg>

);
