import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Hotel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,0H6c-1.654,0-3,1.346-3,3V24h7v-6h-3v-2h10v2h-3v6h7V3c0-1.654-1.346-3-3-3ZM9,14h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm4,8h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm4,8h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Z"/></svg>

);
