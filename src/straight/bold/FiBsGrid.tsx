import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGrid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6.5,24H3a3,3,0,0,1-3-3V17.5H6.5Z"/><path d="M21,24H17.5V17.5H24V21A3,3,0,0,1,21,24Z"/><rect y="8.75" width="6.5" height="6.5"/><rect x="17.5" y="8.75" width="6.5" height="6.5"/><path d="M6.5,6.5H0V3A3,3,0,0,1,3,0H6.5Z"/><rect x="8.75" y="17.5" width="6.5" height="6.5"/><rect x="8.75" y="8.75" width="6.5" height="6.5"/><rect x="8.75" width="6.5" height="6.5"/><path d="M24,6.5H17.5V0H21a3,3,0,0,1,3,3Z"/></svg>

);
