import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLitecoinSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,21v3H7.5c-1.93,0-3.5-1.57-3.5-3.5v-7.39L0,14.44v-3.17l4-1.33V0h3V8.94l9-3v3.17l-9,3v8.39c0,.28,.22,.5,.5,.5h14.5Z"/></svg>

);
