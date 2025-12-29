import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GraphicTablet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="7 20 7 4 2 4 2 11 0 11 0 13 2 13 2 20 7 20"/><path d="M21,4H9V20H21a3,3,0,0,0,3-3V7A3,3,0,0,0,21,4Z"/></svg>

);
