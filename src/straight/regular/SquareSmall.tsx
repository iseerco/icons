import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareSmall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,19H5V8c0-1.65,1.35-3,3-3h8c1.65,0,3,1.35,3,3v11Zm-12-2h10V8c0-.55-.45-1-1-1H8c-.55,0-1,.45-1,1v9Z"/></svg>

);
