import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLabel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0,2,5.615V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5.615ZM5,21V7.371l7-3.93,7,3.93L19,21Z"/><circle cx="12" cy="9" r="1.5"/></svg>

);
