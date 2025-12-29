import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlugCable = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,10h-2c-2.757,0-5,2.243-5,5v3c0,2.206-1.794,4-4,4s-4-1.794-4-4v-3.084c2.834-.477,5-2.948,5-5.916v-2c.553,0,1-.447,1-1s-.447-1-1-1h-2V1c0-.553-.447-1-1-1s-1,.447-1,1v4h-4V1c0-.553-.447-1-1-1s-1,.447-1,1v4H1c-.553,0-1,.447-1,1s.447,1,1,1v2c0,2.968,2.166,5.439,5,5.916v3.084c0,3.309,2.691,6,6,6s6-2.691,6-6v-3c0-1.654,1.346-3,3-3h2c.553,0,1-.447,1-1s-.447-1-1-1Zm-20-1v-2h8v2c0,2.206-1.794,4-4,4s-4-1.794-4-4Z"/>
</svg>

);
