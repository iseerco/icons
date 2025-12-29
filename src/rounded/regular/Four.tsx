import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Four = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0c-.553,0-1,.448-1,1V13H9c-1.654,0-3-1.346-3-3V1c0-.552-.447-1-1-1s-1,.448-1,1V10c0,2.757,2.243,5,5,5h9v8c0,.552,.447,1,1,1s1-.448,1-1V1c0-.552-.447-1-1-1Z"/></svg>

);
