import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Disk = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><rect x="7" width="10" height="6"/><circle cx="12" cy="14" r="2"/><path d="M19,0V8H5V0H3A3,3,0,0,0,0,3V24H24V5ZM12,18a4,4,0,1,1,4-4A4,4,0,0,1,12,18Z"/></svg>

);
