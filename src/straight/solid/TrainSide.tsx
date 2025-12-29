import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrainSide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,22H0V20H24ZM0,8v9H24V16a13.911,13.911,0,0,0-2.527-8ZM6,6h4V2H6Zm6,0h7.779A13.957,13.957,0,0,0,12,2.16ZM4,6V2H0V6Z"/></svg>

);
