import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SendBackward = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,11v13H8v-13c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3Zm-8-5v-3c0-1.657-1.343-3-3-3H3C1.343,0,0,1.343,0,3v13h6v-6c0-2.209,1.791-4,4-4h6Z"/></svg>

);
