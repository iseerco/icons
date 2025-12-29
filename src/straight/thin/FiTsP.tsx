import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsP = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,24h-1V2.5C2,1.121,3.122,0,4.5,0H15c3.86,0,7,3.141,7,7s-3.14,7-7,7H3v10Zm0-11H15c3.309,0,6-2.691,6-6S18.309,1,15,1H4.5c-.827,0-1.5,.673-1.5,1.5V13Z"/></svg>

);
