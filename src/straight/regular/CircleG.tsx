import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleG = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm0-10h5v1.25c0,2.757-2.243,5-5,5s-5-2.243-5-5v-2.5c0-2.757,2.243-5,5-5,1.78,0,3.439.958,4.331,2.5l-1.731,1.001c-.535-.925-1.531-1.5-2.599-1.5-1.654,0-3,1.346-3,3v2.5c0,1.654,1.346,3,3,3,1.396,0,2.571-.957,2.905-2.25h-2.905v-2Z"/></svg>

);
