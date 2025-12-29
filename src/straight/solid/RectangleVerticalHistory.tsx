import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectangleVerticalHistory = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,24h-14V3c0-1.654,1.346-3,3-3h8c1.654,0,3,1.346,3,3v21ZM7,3h-2v18h2V3Zm-5,3H0v12h2V6Z"/>
</svg>

);
