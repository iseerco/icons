import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const IdCardClipAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,4h-6v-1c0-1.654-1.346-3-3-3s-3,1.346-3,3v1H3c-1.654,0-3,1.346-3,3v17h24V7c0-1.654-1.346-3-3-3Zm-10-1c0-.552.449-1,1-1s1,.448,1,1v3h-2v-3Zm11,19H2V7c0-.552.449-1,1-1h6v2h6v-2h6c.551,0,1,.448,1,1v15Zm-5-3v2h-2v-2c0-.552-.449-1-1-1h-4c-.551,0-1,.448-1,1v2h-2v-2c0-1.654,1.346-3,3-3h4c1.654,0,3,1.346,3,3Zm-5-4c1.379,0,2.5-1.121,2.5-2.5s-1.121-2.5-2.5-2.5-2.5,1.121-2.5,2.5,1.121,2.5,2.5,2.5Z"/></svg>

);
