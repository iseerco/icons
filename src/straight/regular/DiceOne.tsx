import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiceOne = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H0V3A3,3,0,0,1,3,0H21a3,3,0,0,1,3,3ZM2,22H22V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3Zm9-10a1,1,0,1,0,1-1A1,1,0,0,0,11,12Z"/></svg>

);
