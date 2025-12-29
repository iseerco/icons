import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Heading = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,23c0,.553-.447,1-1,1h-4c-.553,0-1-.447-1-1s.447-1,1-1h1v-9.5H4v9.5h1c.553,0,1,.447,1,1s-.447,1-1,1H1c-.553,0-1-.447-1-1s.447-1,1-1h1V2h-1c-.553,0-1-.447-1-1S.447,0,1,0h4c.553,0,1,.447,1,1s-.447,1-1,1h-1v8.5h16V2h-1c-.553,0-1-.447-1-1s.447-1,1-1h4c.553,0,1,.447,1,1s-.447,1-1,1h-1v20h1c.553,0,1,.447,1,1Z"/></svg>

);
