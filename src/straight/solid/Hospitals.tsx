import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Hospitals = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,0H3C1.346,0,0,1.346,0,3v21h14V3c0-1.654-1.346-3-3-3Zm-5,19h-2v-2h2v2Zm0-4h-2v-2h2v2Zm4,4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2Zm11-3h-5v4h2v2h2v2h-2v2h-2v9h8V8c0-1.654-1.346-3-3-3Zm-1,14h-2v-2h2v2Z"/></svg>

);
