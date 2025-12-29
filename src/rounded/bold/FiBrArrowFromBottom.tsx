import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowFromBottom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.735,21.016H13.5V4.543l3.185,3.185a1.5,1.5,0,1,0,2.121-2.122L14.075.876a3,3,0,0,0-4.149,0L5.194,5.606A1.5,1.5,0,0,0,7.315,7.728L10.5,4.479V21.016H6.265a1.5,1.5,0,0,0,0,3h11.47a1.5,1.5,0,0,0,0-3Z"/></svg>

);
