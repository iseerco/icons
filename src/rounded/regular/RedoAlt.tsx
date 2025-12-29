import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RedoAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.9,14.723a1,1,0,0,0,1.414,0l4.949-4.95a2.5,2.5,0,0,0,0-3.536l-4.95-4.949A1,1,0,0,0,16.9,2.7L21.2,7,5,7H5a5,5,0,0,0-5,5v7a5.006,5.006,0,0,0,5,5H19a1,1,0,0,0,0-2H5a3,3,0,0,1-3-3V12A3,3,0,0,1,5,9H5L21.212,9,16.9,13.309A1,1,0,0,0,16.9,14.723Z"/></svg>

);
