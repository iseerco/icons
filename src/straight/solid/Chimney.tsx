import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Chimney = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,16h-11v-6h11v6Zm3-8V3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3v5h24Zm-10,10H3v6h11v-6Zm-6-8H3v6h5v-6Zm8,8v6h5v-6h-5Z"/>
</svg>

);
