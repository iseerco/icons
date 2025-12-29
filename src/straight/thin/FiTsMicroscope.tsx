import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMicroscope = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23,14c0-4.411-3.589-8-8-8h-2V2h-2V0h-1v2h-2v12h5v-7h2c3.859,0,7,3.14,7,7s-3.141,7-7,7h-4v-3h6v-1H4v1h6v3H1v1h3v2h1v-2h10c.339,0,.672-.028,1-.069v2.069h1v-2.263c3.445-.892,6-4.017,6-7.737Zm-11-1h-3V3h3v10Z"/></svg>

);
