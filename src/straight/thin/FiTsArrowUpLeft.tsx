import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowUpLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.994,23.287L1.707,1H14V0H1.5C.673,0,0,.673,0,1.5V14H1V1.707L23.287,23.994l.707-.707Z"/></svg>

);
