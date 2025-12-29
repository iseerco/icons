import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsL = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,24H4.5c-1.378,0-2.5-1.121-2.5-2.5V0h1V21.5c0,.827,.673,1.5,1.5,1.5H22v1Z"/></svg>

);
