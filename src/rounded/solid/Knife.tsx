import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Knife = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,2.145c.081,4.1-3.874,14.64-17.087,15.93l-5.178,5.6A1,1,0,0,1,.266,22.321L20.234.714A2.165,2.165,0,0,1,24,2.145Z"/></svg>

);
