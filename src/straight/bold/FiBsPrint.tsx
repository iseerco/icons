import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPrint = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,9a3,3,0,0,0-3-3H19V0H5V6H3A3,3,0,0,0,0,9V21H5v3H19V21h5ZM8,3h8V6H8Zm8,18H8V16h8Zm5-3H19V13H5v5H3V9H21Z"/></svg>

);
