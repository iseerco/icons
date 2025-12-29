import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Heading = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="24 2 24 0 18 0 18 2 20 2 20 10.5 4 10.5 4 2 6 2 6 0 0 0 0 2 2 2 2 22 0 22 0 24 6 24 6 22 4 22 4 12.5 20 12.5 20 22 18 22 18 24 24 24 24 22 22 22 22 2 24 2"/></svg>

);
