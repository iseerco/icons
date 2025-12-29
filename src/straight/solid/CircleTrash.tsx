import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleTrash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,8h-2v-1h2v1Zm-4,8c0,.551.448,1,1,1h4c.552,0,1-.449,1-1v-6h-6v6Zm15-4c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-6-4h-3v-1c0-1.103-.897-2-2-2h-2c-1.103,0-2,.897-2,2v1h-3v2h1v6c0,1.654,1.346,3,3,3h4c1.654,0,3-1.346,3-3v-6h1v-2Z"/>
</svg>

);
