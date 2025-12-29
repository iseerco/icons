import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleTrash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15,10v6c0,.551-.448,1-1,1h-4c-.552,0-1-.449-1-1v-6h6Zm-2-3h-2v1h2v-1Zm11,5c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-6-3c0-.552-.447-1-1-1h-2v-1c0-1.103-.897-2-2-2h-2c-1.103,0-2,.897-2,2v1h-2c-.553,0-1,.448-1,1s.447,1,1,1v6c0,1.654,1.346,3,3,3h4c1.654,0,3-1.346,3-3v-6c.553,0,1-.448,1-1Z"/>
</svg>

);
