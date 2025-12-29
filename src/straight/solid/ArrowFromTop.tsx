import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowFromTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,2V0H5V2h6V21.207L6.7,16.9,5.282,18.318l4.95,4.95a2.5,2.5,0,0,0,3.536,0l4.95-4.95L17.3,16.9l-4.3,4.3V2Z"/></svg>

);
