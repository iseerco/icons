import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBorderAll = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,0H3.5C1.57,0,0,1.57,0,3.5V24H24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,3.5v7h-7.5V3h7c.28,0,.5,.22,.5,.5ZM3.5,3h7v7.5H3V3.5c0-.28,.22-.5,.5-.5Zm-.5,10.5h7.5v7.5H3v-7.5Zm10.5,7.5v-7.5h7.5v7.5h-7.5Z"/></svg>

);
