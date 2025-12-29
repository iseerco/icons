import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Octagon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.02,24H7.08L.05,16.97V7.03L7.08,0h9.94l7.03,7.03v9.94l-7.03,7.03Zm-9.11-2h8.28l5.86-5.86V7.86l-5.86-5.86H7.91L2.05,7.86v8.28l5.86,5.86Z"/></svg>

);
