import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSuitcaseAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,4h-3.5V1.5c0-.827-.673-1.5-1.5-1.5H7.5c-.827,0-1.5,.673-1.5,1.5v2.5H2.5c-1.378,0-2.5,1.121-2.5,2.5V24H24V6.5c0-1.379-1.121-2.5-2.5-2.5ZM7,1.5c0-.275,.224-.5,.5-.5h9c.275,0,.5,.225,.5,.5v2.5H7V1.5ZM23,23h-5V7h-1V23H7V7h-1V23H1V6.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V23Z"/></svg>

);
