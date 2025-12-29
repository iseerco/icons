import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleI = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3,16c.553,0,1,.447,1,1s-.447,1-1,1h-6c-.552,0-1-.447-1-1s.448-1,1-1h2v-8h-2c-.552,0-1-.448-1-1s.448-1,1-1h6c.553,0,1,.448,1,1s-.447,1-1,1h-2v8h2Z"/></svg>

);
