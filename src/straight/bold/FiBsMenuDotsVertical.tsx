import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMenuDotsVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><circle cx="12" cy="2.5" r="2.5"/><circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="21.5" r="2.5"/></svg>

);
