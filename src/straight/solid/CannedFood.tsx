import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CannedFood = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,8V6H18.444A3.959,3.959,0,0,0,19,4a4,4,0,0,0-4-4V2a2,2,0,0,1,0,4H0V8H1v2H19v2H1v6H19v2H1v2H0v2H24V22H23V8Z"/></svg>

);
