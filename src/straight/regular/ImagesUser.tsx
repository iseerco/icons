import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ImagesUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,2h-13c-1.654,0-3,1.346-3,3v13h19V5c0-1.654-1.346-3-3-3Zm-4,14h-5v-1c0-.552.449-1,1-1h3c.551,0,1,.448,1,1v1Zm5,0h-3v-1c0-1.654-1.346-3-3-3h-3c-1.654,0-3,1.346-3,3v1h-3V5c0-.552.449-1,1-1h13c.551,0,1,.448,1,1v11ZM2,20h17v2H0v-13c0-1.654,1.346-3,3-3v2c-.551,0-1,.448-1,1v11Zm15-11.5c0,1.379-1.121,2.5-2.5,2.5s-2.5-1.121-2.5-2.5,1.121-2.5,2.5-2.5,2.5,1.121,2.5,2.5Z"/>
</svg>

);
