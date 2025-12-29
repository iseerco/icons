import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrExpandArrows = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,9A1.5,1.5,0,0,0,24,7.5v-4A3.5,3.5,0,0,0,20.5,0h-4a1.5,1.5,0,0,0,0,3h2.376L12,9.879,5.121,3H7.5a1.5,1.5,0,0,0,0-3h-4A3.5,3.5,0,0,0,0,3.5v4a1.5,1.5,0,0,0,3,0V5.121L9.879,12,3,18.879V16.5a1.5,1.5,0,0,0-3,0v4A3.5,3.5,0,0,0,3.5,24h4a1.5,1.5,0,0,0,0-3H5.121L12,14.121,18.879,21H16.5a1.5,1.5,0,1,0,0,3h4A3.5,3.5,0,0,0,24,20.5v-4a1.5,1.5,0,0,0-3,0v2.376L14.121,12,21,5.121V7.5A1.5,1.5,0,0,0,22.5,9Z"/></svg>

);
