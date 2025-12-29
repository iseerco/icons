import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ZoomOut = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.743,16.328a10,10,0,1,0-1.415,1.415L22.586,24,24,22.586ZM14,11H6V9h8Z"/></svg>

);
