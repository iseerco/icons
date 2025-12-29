import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLayers = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,8.7,12,1.5,0,8.7V9.8L12,17,24,9.8Zm-19.084.55L12,5l7.084,4.251L12,13.5Z"/><polygon points="24 11.802 12 19.002 0 11.802 0 15.301 12 22.501 24 15.301 24 11.802"/></svg>

);
