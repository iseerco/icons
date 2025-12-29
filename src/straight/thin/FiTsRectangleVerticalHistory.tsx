import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRectangleVerticalHistory = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,0h-9c-1.378,0-2.5,1.122-2.5,2.5v21.5h14V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,23h-12V2.5c0-.827.673-1.5,1.5-1.5h9c.827,0,1.5.673,1.5,1.5v20.5ZM5,3h1v18h-1V3ZM0,6h1v12H0V6Z"/>
</svg>

);
