import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessPawn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,17V14h3V12H16.889a7,7,0,1,0-9.778,0H4v2H7v3a5.006,5.006,0,0,1-5,5v2H22V22A5.006,5.006,0,0,1,17,17ZM7,7a5,5,0,1,1,5,5A5.006,5.006,0,0,1,7,7ZM6.9,22A6.98,6.98,0,0,0,9,17V14h6v3a6.98,6.98,0,0,0,2.105,5Z"/></svg>

);
