import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlusMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3,9c0-.553.447-1,1-1h7V1c0-.553.447-1,1-1s1,.447,1,1v7h7c.553,0,1,.447,1,1s-.447,1-1,1h-7v7c0,.553-.447,1-1,1s-1-.447-1-1v-7h-7c-.553,0-1-.447-1-1Zm17,13H4c-.553,0-1,.447-1,1s.447,1,1,1h16c.553,0,1-.447,1-1s-.447-1-1-1Z"/></svg>

);
