import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.4,22l-4.134-6h2.819L16.8,10h3.155l-5.9-8.929a2.516,2.516,0,0,0-4.117.02L5.366,8H12l1.429,2H6.858L4,14h9.576l1.379,2H5.731L1.6,22H11v2h2V22Z"/></svg>

);
