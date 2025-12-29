import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrashCanPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,4v-2c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v2H2v2h2v15c0,1.654,1.346,3,3,3h10c1.654,0,3-1.346,3-3V6h2v-2h-5Zm-8-2h6v2h-6v-2Zm7,13h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2Z"/>
</svg>

);
