import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Four = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,0V13H7c-.552,0-1-.449-1-1V0h-2V12c0,1.654,1.346,3,3,3h11v9h2V0h-2Z"/></svg>

);
