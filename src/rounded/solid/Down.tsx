import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Down = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24c-1.02,0-2.03-.39-2.81-1.16l-6.37-6.77c-.85-.85-1.1-2.09-.63-3.22,.47-1.13,1.52-1.84,2.75-1.85h2.06V3c0-1.65,1.35-3,3-3h4c1.65,0,3,1.35,3,3V11h2.06c1.23,0,2.28,.71,2.75,1.85,.47,1.13,.22,2.38-.65,3.24,0,0-6.34,6.74-6.35,6.75-.77,.77-1.79,1.16-2.81,1.16Z"/></svg>

);
