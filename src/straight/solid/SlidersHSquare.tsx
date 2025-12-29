import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SlidersHSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm-2,17h-3v2h-2v-2H5v-2h9v-2h2v2h3v2Zm0-8h-9v2h-2v-2h-3v-2h3v-2h2v2h9v2Z"/></svg>

);
