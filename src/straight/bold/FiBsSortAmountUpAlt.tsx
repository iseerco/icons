import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSortAmountUpAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><rect x="10" y="8" width="14" height="3"/><rect x="10" y="14" width="10" height="3"/><rect x="10" y="20" width="6" height="3"/><path d="M11.164,5L6.567,.409c-.544-.545-1.427-.545-1.972,0h0L0,5H4V24h3V5h4.164Z"/></svg>

);
