import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsComputer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,19V3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V19H10.5v2H6v3H18V21H13.5V19ZM21,3V13H3V3Z"/></svg>

);
