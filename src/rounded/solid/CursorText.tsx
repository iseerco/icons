import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CursorText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,22H16a3,3,0,0,1-3-3V16h3a1,1,0,0,0,0-2H13V5a3,3,0,0,1,3-3h2a1,1,0,0,0,0-2H16a4.982,4.982,0,0,0-4,2.031A4.982,4.982,0,0,0,8,0H6A1,1,0,0,0,6,2H8a3,3,0,0,1,3,3v9H8a1,1,0,0,0,0,2h3v3a3,3,0,0,1-3,3H6a1,1,0,0,0,0,2H8a4.982,4.982,0,0,0,4-2.031A4.982,4.982,0,0,0,16,24h2a1,1,0,0,0,0-2Z"/></svg>

);
