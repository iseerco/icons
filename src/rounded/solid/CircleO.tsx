import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleO = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15,10.75v2.5c0,1.654-1.346,3-3,3s-3-1.346-3-3v-2.5c0-1.654,1.346-3,3-3s3,1.346,3,3Zm9,1.25c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-7-1.25c0-2.757-2.243-5-5-5s-5,2.243-5,5v2.5c0,2.757,2.243,5,5,5s5-2.243,5-5v-2.5Z"/></svg>

);
