import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquare1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H0V2.5C0,1.122,1.122,0,2.5,0H21.5c1.378,0,2.5,1.122,2.5,2.5V24ZM1,23H23V2.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5,.673-1.5,1.5V23ZM13,6h-.798l-3.36,3.451,.717,.697,2.441-2.507v10.359h1V6Z"/></svg>

);
