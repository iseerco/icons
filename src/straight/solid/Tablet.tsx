import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tablet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><rect x="2" width="20" height="17"/><path d="M13,19v2H11V19H2v2a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V19Z"/></svg>

);
