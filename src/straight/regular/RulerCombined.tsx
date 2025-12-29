import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RulerCombined = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,14V0H3C1.346,0,0,1.346,0,3V21c0,1.654,1.346,3,3,3H21c1.654,0,3-1.346,3-3v-7H10Zm12,7c0,.552-.448,1-1,1H3c-.551,0-1-.448-1-1V3c0-.552,.449-1,1-1h5V6h-3v2h3v2h-3v2h3v2h-3v2h3v3h2v-3h2v3h2v-3h2v3h2v-3h4v5Z"/></svg>

);
