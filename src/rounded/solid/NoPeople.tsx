import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NoPeople = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,22H5c-2.76,0-5-2.24-5-5V7C0,4.24,2.24,2,5,2h14c2.76,0,5,2.24,5,5v10c0,2.76-2.24,5-5,5Z"/></svg>

);
