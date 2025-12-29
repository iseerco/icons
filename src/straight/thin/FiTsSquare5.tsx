import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquare5 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H0V2.5C0,1.122,1.122,0,2.5,0H21.5c1.378,0,2.5,1.122,2.5,2.5V24ZM1,23H23V2.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5,.673-1.5,1.5V23Zm15-8.5c0-1.93-1.57-3.5-3.5-3.5h-3.5V7h6v-1h-7v6h4.5c1.378,0,2.5,1.121,2.5,2.5s-1.122,2.5-2.5,2.5h-4.5v1h4.5c1.93,0,3.5-1.57,3.5-3.5Z"/></svg>

);
