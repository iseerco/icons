import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsOctagon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.02,24H7.08L.05,16.97V7.03L7.08,0h9.94l7.03,7.03v9.94l-7.03,7.03Zm-9.53-1h9.11l6.44-6.44V7.44L16.61,1H7.49L1.05,7.44v9.11l6.44,6.44Z"/></svg>

);
