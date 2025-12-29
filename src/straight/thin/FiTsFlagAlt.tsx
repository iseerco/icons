import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFlagAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24.054,0H2.546C1.167,0,.046,1.121,.046,2.5V24H1.046V15H24.054l-5.651-7.5L24.054,0Zm-2.006,14H1.046V2.5c0-.827,.673-1.5,1.5-1.5H22.048l-4.897,6.5,4.897,6.5Z"/></svg>

);
