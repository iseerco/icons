import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowToTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.553,2a2.578,2.578,0,0,0-.321.263l-4.95,4.95L6.7,8.627l4.3-4.3V24h2V4.324l4.3,4.3,1.414-1.414-4.95-4.95A2.578,2.578,0,0,0,13.447,2H19V0H5V2Z"/></svg>

);
