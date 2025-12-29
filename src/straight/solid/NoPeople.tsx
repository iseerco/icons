import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NoPeople = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,22H3c-1.65,0-3-1.35-3-3V5c0-1.65,1.35-3,3-3H21c1.65,0,3,1.35,3,3v14c0,1.65-1.35,3-3,3Z"/></svg>

);
