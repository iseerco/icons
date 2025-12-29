import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRectangleVerticalHistory = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,0h-7c-1.93,0-3.5,1.57-3.5,3.5v20.5h14V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21h-8V3.5c0-.276.224-.5.5-.5h7c.276,0,.5.224.5.5v17.5ZM5,3h3v18h-3V3ZM0,6h3v12H0V6Z"/>
</svg>

);
