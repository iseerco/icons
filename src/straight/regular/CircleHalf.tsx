import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,24h-1C5.38,24,0,18.62,0,12S5.38,0,12,0h1V24ZM11,2.05C5.95,2.55,2,6.82,2,12s3.95,9.45,9,9.95V2.05Z"/></svg>

);
