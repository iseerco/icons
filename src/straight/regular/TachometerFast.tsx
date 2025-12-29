import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TachometerFast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.932,12.482a2,2,0,1,1-1.414-1.414l4.275-4.275,1.414,1.414ZM12,1C.374.982-4.414,16.17,5.112,22.818l.639.449,2.9-2.51L7.346,19.243l-1.7,1.47C-1.55,14.848,2.7,2.965,12,3c9.3-.035,13.551,11.849,6.353,17.713l-1.7-1.47-1.308,1.514,2.9,2.51.639-.449C28.418,16.167,23.621.98,12,1Z"/></svg>

);
