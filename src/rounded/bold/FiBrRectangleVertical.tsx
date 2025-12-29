import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrRectangleVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.5,24h-7c-3.03,0-5.5-2.47-5.5-5.5V5.5C3,2.47,5.47,0,8.5,0h7c3.03,0,5.5,2.47,5.5,5.5v13c0,3.03-2.47,5.5-5.5,5.5ZM8.5,3c-1.38,0-2.5,1.12-2.5,2.5v13c0,1.38,1.12,2.5,2.5,2.5h7c1.38,0,2.5-1.12,2.5-2.5V5.5c0-1.38-1.12-2.5-2.5-2.5h-7Z"/></svg>

);
