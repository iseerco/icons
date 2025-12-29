import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareUpRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm-2,15h-2v-6.586l-10.793,10.793-1.414-1.414L15.586,7h-6.586v-2h8c1.103,0,2,.897,2,2v8Z"/>
</svg>

);
