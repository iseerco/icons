import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPortrait = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3A3,3,0,0,0,0,3V24H24V3A3,3,0,0,0,21,0Zm0,21H18V16a2,2,0,0,0-2-2H8a2,2,0,0,0-2,2v5H3V3H21Z"/><circle cx="12" cy="8.5" r="3.5"/></svg>

);
