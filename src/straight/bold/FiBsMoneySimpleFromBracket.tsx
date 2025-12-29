import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMoneySimpleFromBracket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,11c0,1.66-1.34,3-3,3s-3-1.34-3-3,1.34-3,3-3,3,1.34,3,3Zm9-3h-3V24H3V8H0V3.5C0,1.57,1.57,0,3.5,0H20.5c1.93,0,3.5,1.57,3.5,3.5v4.5Zm-6,13V3H6V21h12Z"/></svg>

);
