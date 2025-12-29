import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRectangleXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,2H3.5C1.57,2,0,3.57,0,5.5V22H24V5.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,17H3V5.5c0-.275,.225-.5,.5-.5H20.5c.275,0,.5,.225,.5,.5v13.5Zm-4.189-9.689l-2.689,2.689,2.689,2.689-2.121,2.121-2.689-2.689-2.689,2.689-2.121-2.121,2.689-2.689-2.689-2.689,2.121-2.121,2.689,2.689,2.689-2.689,2.121,2.121Z"/></svg>

);
