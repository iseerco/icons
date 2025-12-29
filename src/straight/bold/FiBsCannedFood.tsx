import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCannedFood = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,9V6H19.724A4.445,4.445,0,0,0,20,4.5,4.505,4.505,0,0,0,15.5,0H15V3h.5a1.5,1.5,0,0,1,0,3H0V9H1V21H0v3H24V21H23V9ZM20,21H4V19H18V16H4V14H18V11H4V9H20Z"/></svg>

);
