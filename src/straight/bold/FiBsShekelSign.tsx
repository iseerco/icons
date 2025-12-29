import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsShekelSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,24H1V0h7.5c4.687,0,8.5,3.813,8.5,8.5v8.5h-3V8.5c0-3.032-2.468-5.5-5.5-5.5H4V24ZM23,15.5V0h-3V15.5c0,3.032-2.468,5.5-5.5,5.5h-4.5V7h-3V24h7.5c4.687,0,8.5-3.813,8.5-8.5Z"/></svg>

);
