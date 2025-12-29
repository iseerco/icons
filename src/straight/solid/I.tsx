import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const I = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="19 2 19 0 5 0 5 2 11 2 11 22 5 22 5 24 19 24 19 22 13 22 13 2 19 2"/></svg>

);
