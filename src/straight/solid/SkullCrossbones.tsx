import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SkullCrossbones = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.069,19.006l8.846,3.048-.651,1.891-11.264-3.881L.736,23.945l-.651-1.891,8.846-3.048L.084,15.958l.651-1.891,11.264,3.881,11.264-3.881.651,1.891-8.846,3.048Zm-7.069-7.006h-3v-5c0-3.86,3.14-7,7-7s7,3.14,7,7v5h-3v3h-8v-3Zm5-4.5c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5,1.5Zm-5,0c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5,1.5Z"/></svg>

);
