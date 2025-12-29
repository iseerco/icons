import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Stairs = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <polygon points="2 24 0 24 0 16 6 16 6 11 11 11 11 6 16 6 16 0 24 0 24 2 18 2 18 8 13 8 13 13 8 13 8 18 2 18 2 24"/>
</svg>

);
