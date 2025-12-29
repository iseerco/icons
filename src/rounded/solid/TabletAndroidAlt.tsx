import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TabletAndroidAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,16V5C3,2.243,5.243,0,8,0h8c2.757,0,5,2.243,5,5v11H3Zm18,2v1c0,2.757-2.243,5-5,5h-8c-2.757,0-5-2.243-5-5v-1h18Zm-7,3c0-.552-.447-1-1-1h-2c-.553,0-1,.448-1,1s.447,1,1,1h2c.553,0,1-.448,1-1Z"/>
</svg>

);
