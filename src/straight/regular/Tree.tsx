import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.4,22l-4.134-6h2.819L16.8,10h3.155l-5.9-8.929a2.516,2.516,0,0,0-4.117.02L4.044,10H7.2L2.912,16H5.731L1.6,22H11v2h2V22ZM8.16,16h5.251l-1.378-2H6.8l2.858-4h2.228L10.456,8H7.765l3.824-5.785a.489.489,0,0,1,.808-.02L16.235,8H12.914L17.2,14H14.462L18.6,20H5.4Z"/></svg>

);
