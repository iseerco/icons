import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TurnLeftDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10,3v18.049l5.795-5.758,1.409,1.418-6.721,6.677c-.394.396-.922.614-1.484.614s-1.09-.219-1.487-.616L.795,16.709l1.409-1.418,5.795,5.758V3c0-1.654,1.346-3,3-3h11v2h-11c-.551,0-1,.449-1,1Z"/>
</svg>

);
