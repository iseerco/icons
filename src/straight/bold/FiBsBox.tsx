import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3v7H1V24H23V10h1ZM3,3H21V7H3ZM20,21H4V10H20Z"/><rect x="8" y="12" width="8" height="3"/></svg>

);
