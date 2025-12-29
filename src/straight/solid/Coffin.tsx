import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Coffin = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.314,24H5.686l-3.226-15.592L5.068,1.886c.459-1.146,1.552-1.886,2.786-1.886h8.291c1.234,0,2.327.74,2.786,1.886l2.608,6.522-3.226,15.592Z"/></svg>

);
