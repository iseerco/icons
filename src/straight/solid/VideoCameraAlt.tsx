import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VideoCameraAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,5.007v13.985l-3-2.236V7.244l3-2.236Zm-5,1.993v13H0V7c0-1.654,1.346-3,3-3h13c1.654,0,3,1.346,3,3Z"/></svg>

);
