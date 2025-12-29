import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WindowMaximize = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,8V4C0,2.35,1.35,1,3,1H21c1.65,0,3,1.35,3,3v4H0Zm0,2v13H24V10H0Z"/></svg>

);
