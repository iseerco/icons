import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SkullCrossbones = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.069,19.006l8.846,3.048-.651,1.891-11.264-3.881L.736,23.945l-.651-1.891,8.846-3.048L.084,15.958l.651-1.891,11.264,3.881,11.264-3.881.651,1.891-8.846,3.048Zm-4.069-11.506c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Zm3.5,1.5c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5,1.5.672,1.5,1.5,1.5Zm-6.5,3h-3v-5c0-3.86,3.14-7,7-7s7,3.14,7,7v5h-3v3h-8v-3Zm2-2v3h4v-3h3v-3c0-2.757-2.243-5-5-5s-5,2.243-5,5v3h3Z"/></svg>

);
