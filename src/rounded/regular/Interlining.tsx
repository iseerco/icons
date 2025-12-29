import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Interlining = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,6H23a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2Z"/><path d="M23,11H10a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/><path d="M23,18H10a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/><path d="M6.087,6a.5.5,0,0,0,.353-.854L4,2.707a1,1,0,0,0-1.414,0L.147,5.146A.5.5,0,0,0,.5,6H2.294V18H.5a.5.5,0,0,0-.354.854l2.44,2.439a1,1,0,0,0,1.414,0L6.44,18.854A.5.5,0,0,0,6.087,18H4.294V6Z"/></svg>

);
