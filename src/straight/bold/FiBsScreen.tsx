import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsScreen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,19V5a3,3,0,0,0-3-3H3A3,3,0,0,0,0,5V19H10.5v2h-4v3h11V21h-4V19ZM3,5H21V16H3Z"/></svg>

);
