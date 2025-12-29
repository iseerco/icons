import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChessKingAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.007,19.037A43.434,43.434,0,0,1,16.486,11H18V8H16.7l1.247-2.777A2.415,2.415,0,0,0,15.666,2H13.5V0h-3V2H8.333A2.416,2.416,0,0,0,6.055,5.224L7.3,8H6v3H7.513a43.509,43.509,0,0,1-2.521,8.037A3.506,3.506,0,0,0,2,22.5V24H22V22.5A3.505,3.505,0,0,0,19.007,19.037ZM9.24,5h5.52L13.407,8H10.593Zm4.21,6a41.426,41.426,0,0,0,2.31,8H8.241a41.5,41.5,0,0,0,2.309-8Z"/></svg>

);
