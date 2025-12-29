import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRoomService = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,20v-3c0-5.898-4.666-10.726-10.5-10.988v-1.075c.862-.223,1.5-1.007,1.5-1.937,0-1.103-.897-2-2-2s-2,.897-2,2c0,.93.638,1.714,1.5,1.937v1.075c-5.834.262-10.5,5.09-10.5,10.988v3H0v1h24v-1h-1ZM11,3c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1ZM2,17c0-5.514,4.486-10,10-10s10,4.486,10,10v3H2v-3Z"/>
</svg>

);
