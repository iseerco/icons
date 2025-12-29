import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBracketRoundRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,12c0,7.39-5.21,11.78-5.43,11.96l-1.92-2.31s4.34-3.71,4.34-9.66S8.7,2.38,8.66,2.34L10.57,.04c.22,.18,5.43,4.58,5.43,11.96Z"/></svg>

);
