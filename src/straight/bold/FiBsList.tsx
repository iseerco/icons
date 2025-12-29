import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><rect x="7" y="4" width="17" height="3"/><rect x="7" y="11" width="17" height="3"/><rect x="7" y="18" width="17" height="3"/><circle cx="2.5" cy="5.5" r="2.5"/><circle cx="2.5" cy="12" r="2.5"/><circle cx="2.5" cy="19" r="2.5"/></svg>

);
