import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLevelDownAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,18V3.5A3.5,3.5,0,0,0,10.5,0H0V3H10.5a.5.5,0,0,1,.5.5V18H6.421L11.5,23.555a1.338,1.338,0,0,0,1.992,0L18.579,18Z"/></svg>

);
