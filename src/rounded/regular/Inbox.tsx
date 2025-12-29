import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Inbox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,12H18a2,2,0,0,0-2,2,2,2,0,0,1-2,2H10a2,2,0,0,1-2-2,2,2,0,0,0-2-2H3a3,3,0,0,0-3,3v4a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V15A3,3,0,0,0,21,12Zm1,7a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V15a1,1,0,0,1,1-1H6a4,4,0,0,0,4,4h4a4,4,0,0,0,4-4h3a1,1,0,0,1,1,1Z"/><path d="M3,10H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z"/><path d="M3,6H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,6Z"/></svg>

);
