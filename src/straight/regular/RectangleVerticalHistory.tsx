import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectangleVerticalHistory = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,0h-8c-1.654,0-3,1.346-3,3v21h14V3c0-1.654-1.346-3-3-3Zm1,22h-10V3c0-.551.449-1,1-1h8c.551,0,1,.449,1,1v19ZM5,3h2v18h-2V3ZM0,6h2v12H0V6Z"/>
</svg>

);
