import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSensor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,6.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Zm3.5-1.5c-.828,0-1.5,.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm12.5-1.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5V24H24V3.5ZM3,3.5c0-.276,.224-.5,.5-.5H20.5c.276,0,.5,.224,.5,.5V21H3V3.5Z"/></svg>

);
