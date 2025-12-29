import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareU = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm-3,13c0,3.309-2.691,6-6,6s-6-2.691-6-6V5h2v8c0,2.206,1.794,4,4,4s4-1.794,4-4V5h2v8Z"/></svg>

);
