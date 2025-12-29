import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BracketRoundRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.23,23.97l-1.23-1.58c.05-.04,5-3.99,5-10.39S9.05,1.65,9,1.61L10.23,.03c.24,.18,5.77,4.56,5.77,11.97s-5.54,11.79-5.77,11.97Z"/></svg>

);
