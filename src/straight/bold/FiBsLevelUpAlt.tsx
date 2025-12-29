import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLevelUpAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,6V20.5A3.5,3.5,0,0,1,10.5,24H0V21H10.5a.5.5,0,0,0,.5-.5V6H6.421L11.5.445a1.338,1.338,0,0,1,1.992,0L18.579,6Z"/></svg>

);
