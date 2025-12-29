import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDiceOne = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H0V2.5C0,1.121,1.122,0,2.5,0H21.5c1.378,0,2.5,1.121,2.5,2.5V24ZM1,23H23V2.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5,.673-1.5,1.5V23ZM11,12c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Z"/></svg>

);
