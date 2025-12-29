import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleJ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4.75,15c0,1.654-1.346,3-3,3h-4c-1.654,0-3-1.346-3-3,0-.553.447-1,1-1s1,.447,1,1,.448,1,1,1h4c.552,0,1-.448,1-1V7c0-.552.447-1,1-1s1,.448,1,1v8Z"/></svg>

);
