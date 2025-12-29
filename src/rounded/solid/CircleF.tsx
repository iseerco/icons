import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleF = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4,8h-6c-.551,0-1,.449-1,1v3h5c.552,0,1,.448,1,1s-.448,1-1,1h-5v3c0,.553-.448,1-1,1s-1-.447-1-1v-8c0-1.654,1.346-3,3-3h6c.552,0,1,.448,1,1s-.448,1-1,1Z"/></svg>

);
