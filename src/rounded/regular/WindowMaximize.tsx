import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WindowMaximize = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,1H5C2.24,1,0,3.24,0,6v12c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V6c0-2.76-2.24-5-5-5ZM5,3h14c1.65,0,3,1.35,3,3v2H2v-2c0-1.65,1.35-3,3-3Zm14,18H5c-1.65,0-3-1.35-3-3V10H22v8c0,1.65-1.35,3-3,3Z"/></svg>

);
