import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CameraMovie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,8.086l-4,4v-1.086c0-1.344-.888-2.484-2.108-2.865.693-.858,1.108-1.949,1.108-3.135,0-2.757-2.243-5-5-5-1.634,0-3.087.788-4,2.003-.913-1.216-2.366-2.003-4-2.003C3.243,0,1,2.243,1,5c0,1.186.416,2.277,1.108,3.135-1.22.381-2.108,1.521-2.108,2.865v13h20v-4.086l4,4v-15.828ZM14,2c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm-8,0c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm12,20H2v-11c0-.551.449-1,1-1h14c.551,0,1,.449,1,1v11Zm4-2.914l-2-2v-2.172l2-2v6.172Z"/></svg>

);
