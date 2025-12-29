import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrItalic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H6A1.5,1.5,0,0,0,6,3h5.713L9.259,21H3a1.5,1.5,0,0,0,0,3H18a1.5,1.5,0,0,0,0-3H12.287L14.741,3H21a1.5,1.5,0,0,0,0-3Z"/></svg>

);
