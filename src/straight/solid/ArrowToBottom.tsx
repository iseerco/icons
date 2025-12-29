import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowToBottom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.447,22a2.578,2.578,0,0,0,.321-.263l4.95-4.95L17.3,15.373l-4.3,4.3V0H11V19.676l-4.3-4.3L5.282,16.787l4.95,4.95a2.578,2.578,0,0,0,.321.263H5v2H19V22Z"/></svg>

);
