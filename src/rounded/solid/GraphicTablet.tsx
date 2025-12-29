import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GraphicTablet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,4H9V20H19a5.006,5.006,0,0,0,5-5V9A5.006,5.006,0,0,0,19,4Z"/><path d="M2,9v2H1a1,1,0,0,0,0,2H2v2a5.006,5.006,0,0,0,5,5V4A5.006,5.006,0,0,0,2,9Z"/></svg>

);
