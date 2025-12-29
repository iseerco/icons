import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Chimney = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,16h-11v-6h11v6Zm3-10.5v-1.5c0-2.209-1.791-4-4-4H4C1.791,0,0,1.791,0,4v1.5c0,1.381,1.119,2.5,2.5,2.5h19c1.381,0,2.5-1.119,2.5-2.5Zm-10,12.5H3v2.5c0,1.933,1.567,3.5,3.5,3.5h7.5v-6Zm-6-8H3v6h5v-6Zm8,8v6h1.5c1.933,0,3.5-1.567,3.5-3.5v-2.5h-5Z"/>
</svg>

);
