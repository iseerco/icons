import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowToRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,10.553a2.578,2.578,0,0,0-.263-.321l-4.95-4.95L15.373,6.7l4.3,4.3H0v2H19.676l-4.3,4.3,1.414,1.414,4.95-4.95A2.578,2.578,0,0,0,22,13.447V19h2V5H22Z"/></svg>

);
