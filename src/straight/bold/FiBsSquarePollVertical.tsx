import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSquarePollVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,0H3.5C1.57,0,0,1.57,0,3.5V24H24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H3V3.5c0-.28,.22-.5,.5-.5H20.5c.28,0,.5,.22,.5,.5V21ZM5,8h3v11h-3V8Zm5.5-3h3v14h-3V5Zm5.5,10h3v4h-3v-4Z"/></svg>

);
