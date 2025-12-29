import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSlidersVSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H2C.748,0,0,.935,0,2.5v21.5h24V2.5c0-1.408-1.612-2.5-3-2.5Zm2,23H1V2.5c0-1.5.753-1.5,1-1.5h19c.873,0,2,.728,2,1.5v20.5Zm-15-15h3v1h-3v10h-1v-10h-3v-1h3v-3h1v3Zm9,7h3v1h-3v3h-1v-3h-3v-1h3V5h1v10Z"/></svg>

);
