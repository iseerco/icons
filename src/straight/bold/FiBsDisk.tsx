import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDisk = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.121,0H3A3,3,0,0,0,0,3V24H24V5.879ZM21,21H3V3H6V7H17V3.121l4,4Z"/><circle cx="12" cy="14" r="4"/></svg>

);
