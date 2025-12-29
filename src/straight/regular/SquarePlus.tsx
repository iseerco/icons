import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquarePlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,11h4v2h-4v4h-2v-4H7v-2h4V7h2v4ZM24,3V24H0V3C0,1.346,1.346,0,3,0H21c1.654,0,3,1.346,3,3Zm-2,0c0-.552-.449-1-1-1H3c-.551,0-1,.448-1,1V22H22V3Z"/></svg>

);
