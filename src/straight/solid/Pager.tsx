import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pager = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,10H6v-2h12v2Zm6-5v17H0V5c0-1.654,1.346-3,3-3h18c1.654,0,3,1.346,3,3ZM7,14h-3v2h3v-2Zm5,0h-3v2h3v-2Zm5,0h-3v2h3v-2Zm3-8H4v6h16v-6Z"/></svg>

);
