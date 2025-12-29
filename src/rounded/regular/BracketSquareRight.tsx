import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BracketSquareRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,24h-2c-.55,0-1-.45-1-1s.45-1,1-1h2c1.65,0,3-1.35,3-3V5c0-1.65-1.35-3-3-3h-2c-.55,0-1-.45-1-1s.45-1,1-1h2c2.76,0,5,2.24,5,5v14c0,2.76-2.24,5-5,5Z"/></svg>

);
