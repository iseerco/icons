import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WalkieTalkie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16,11h-8v-2h8v2Zm6-5v6.448c0,.905-.311,1.792-.876,2.499l-1.124,1.404v7.649H4v-7.649l-1.124-1.404c-.565-.707-.876-1.594-.876-2.499v-6.448c0-1.654,1.346-3,3-3V0h2v3h3V1h2v2h7c1.654,0,3,1.346,3,3Zm-4,1H6v6h12v-6Z"/></svg>

);
