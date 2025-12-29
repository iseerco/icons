import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWindowMaximize = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,1H2.5C1.12,1,0,2.12,0,3.5V23H24V3.5c0-1.38-1.12-2.5-2.5-2.5ZM2.5,2H21.5c.83,0,1.5,.67,1.5,1.5v4.5H1V3.5c0-.83,.67-1.5,1.5-1.5ZM1,22V9H23v13H1Z"/></svg>

);
