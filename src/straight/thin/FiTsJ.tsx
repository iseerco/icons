import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsJ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,24H4.5c-1.379,0-2.5-1.122-2.5-2.5v-3.5h1v3.5c0,.827,.673,1.5,1.5,1.5h15c.827,0,1.5-.673,1.5-1.5V0h1V21.5c0,1.378-1.121,2.5-2.5,2.5Z"/></svg>

);
