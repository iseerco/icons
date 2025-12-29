import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sphere = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,6c6.841,0,12,2.579,12,6A12,12,0,0,0,0,12C0,8.579,5.159,6,12,6Z"/><ellipse cx="12" cy="12" rx="10" ry="4"/><path d="M12,18C5.159,18,0,15.421,0,12a12,12,0,0,0,24,0C24,15.421,18.841,18,12,18Z"/></svg>

);
