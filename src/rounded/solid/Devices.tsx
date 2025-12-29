import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Devices = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,7c.55,0,1-.45,1-1,0-2.76-2.24-5-5-5H5C2.24,1,0,3.24,0,6v7c0,2.76,2.24,5,5,5h5v2h-3c-.55,0-1,.45-1,1s.45,1,1,1h4c.55,0,1-.45,1-1V13c0-3.31,2.69-6,6-6h3Zm-1,2h-2c-2.21,0-4,1.79-4,4v7c0,2.21,1.79,4,4,4h2c2.21,0,4-1.79,4-4v-7c0-2.21-1.79-4-4-4Z"/></svg>

);
