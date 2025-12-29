import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CannedFood = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,8V6H18.463A4,4,0,0,0,15,0V2a2,2,0,0,1,0,4H0V8H1V22H0v2H24V22H23V8ZM21,22H3V20H19V18H3V12H19V10H3V8H21Z"/></svg>

);
