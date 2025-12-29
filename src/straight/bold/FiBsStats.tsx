import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsStats = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,21V0H0V21a3,3,0,0,0,3,3H24V21Z"/><rect x="18" y="9" width="3" height="9"/><rect x="6" y="9" width="3" height="9"/><rect x="12" y="4" width="3" height="14"/></svg>

);
