import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleT = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4.75,8.5h-3.75v9c0,.553-.448,1-1,1s-1-.447-1-1v-9h-3.75c-.552,0-1-.447-1-1s.448-1,1-1h9.5c.552,0,1,.447,1,1s-.448,1-1,1Z"/></svg>

);
