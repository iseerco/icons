import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const InputNumeric = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,2.5H3c-1.654,0-3,1.346-3,3v15h24V5.5c0-1.654-1.346-3-3-3Zm-13,14.5h-2v-6.621l-1.284,1.318-1.433-1.395,3.215-3.303h1.501v10Z"/></svg>

);
