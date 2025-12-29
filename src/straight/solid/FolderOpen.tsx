import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.827,10l-3.6,13H4.086l4.133-13h15.608ZM2,23l4.8-15h14.2s0-2,0-2c0-1.654-1.346-3-3-3h-7.764L6.236,1h-3.236C1.346,1,0,2.346,0,4v19h2Z"/></svg>

);
