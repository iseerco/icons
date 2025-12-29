import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileExport = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,21H20v3H0V3C0,1.35,1.35,0,3,0H14.38l5.62,5.66v2.34H12s0-5,0-5H3V21Zm20.71-7.21l-3.71-3.79v3H12v3h8v3l3.71-3.79c.39-.39,.39-1.02,0-1.41Z"/></svg>

);
