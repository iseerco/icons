import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WaveSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,22h-4c-1.654,0-3-1.346-3-3V5c0-.551-.449-1-1-1h-4c-.551,0-1,.449-1,1v8H0v-2h3v-6c0-1.654,1.346-3,3-3h4c1.654,0,3,1.346,3,3v14c0,.551.449,1,1,1h4c.551,0,1-.449,1-1v-8h5v2h-3v6c0,1.654-1.346,3-3,3Z"/></svg>

);
