import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MugTeaSaucer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,5h-2v-3H2v13c0,1.654,1.346,3,3,3h11c1.654,0,3-1.346,3-3v-1h5v-6c0-1.654-1.346-3-3-3Zm-4,10c0,.552-.449,1-1,1H5c-.551,0-1-.448-1-1V4h4.5v2.5l-1.5,1.5v4h5v-4l-1.5-1.5v-2.5h6.5v11Zm5-3h-3v-5h2c.551,0,1,.448,1,1v4ZM.008,20h20.992v2H.008v-2Z"/>
</svg>

);
