import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Smartphone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><rect x="4" width="16" height="16"/><path d="M4,18v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V18Zm9,4H11V20h2Z"/></svg>

);
