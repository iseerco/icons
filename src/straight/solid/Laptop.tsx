import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Laptop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.991,18l-.846-1H0v1a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17H15.86l-.847,1Z"/><polygon points="9.082 15 9.929 16 14.086 16 14.932 15 22 15 22 3 2 3 2 15 9.082 15"/></svg>

);
