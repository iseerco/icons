import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowUpLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.957,22.543L3.414,2H14V0H2C.897,0,0,.897,0,2V14H2V3.414L22.543,23.957l1.414-1.414Z"/></svg>

);
