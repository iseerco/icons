import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VideoCamera = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="21 10.244 21 19.756 24 21.993 24 8.007 21 10.244"/><path d="M16,6H14.915l-5-5H0V3H9.086l3,3H3A3,3,0,0,0,0,9V24H19V9A3,3,0,0,0,16,6Z"/></svg>

);
