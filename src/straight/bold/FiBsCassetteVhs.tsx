import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCassetteVhs = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,3H3.5c-1.93,0-3.5,1.57-3.5,3.5v14.5H24V6.5c0-1.93-1.57-3.5-3.5-3.5ZM3,18V8H21v10H3Zm7-8h4v6h-4v-6Zm8,0s1,1.12,1,3-1,3-1,3h-2v-6h2Zm-12,0h2v6h-2s-1-1.12-1-3,1-3,1-3Z"/></svg>

);
