import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectanglePanoramic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,5H5a5,5,0,0,0-5,5v4a5,5,0,0,0,5,5H19a5,5,0,0,0,5-5V10A5,5,0,0,0,19,5Zm3,9a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V10A3,3,0,0,1,5,7H19a3,3,0,0,1,3,3Z"/></svg>

);
