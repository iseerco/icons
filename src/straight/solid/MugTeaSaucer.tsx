import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MugTeaSaucer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m.008,20h20.992v2H.008v-2Zm23.992-12v6h-5v1c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V2h6.5v4.5l-1.5,1.5v4h5v-4l-1.5-1.5V2h8.5v3h2c1.654,0,3,1.346,3,3Zm-2,0c0-.552-.449-1-1-1h-2v5h3v-4Z"/>
</svg>

);
