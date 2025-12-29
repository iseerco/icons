import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowToBottom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.735,21.015h-3l4.069-4.068a1.5,1.5,0,0,0-2.121-2.121L13.5,18.01V1.515a1.5,1.5,0,0,0-3,0v16.5L7.315,14.826a1.5,1.5,0,0,0-2.121,2.121l4.068,4.068h-3a1.5,1.5,0,0,0,0,3h11.47a1.5,1.5,0,0,0,0-3Z"/></svg>

);
