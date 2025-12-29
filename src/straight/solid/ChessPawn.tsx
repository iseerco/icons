import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessPawn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,14V12H7.111a7,7,0,1,1,9.778,0H20v2Zm13,3V16H7v1a5.006,5.006,0,0,1-5,5v2H22V22A5.006,5.006,0,0,1,17,17Z"/></svg>

);
