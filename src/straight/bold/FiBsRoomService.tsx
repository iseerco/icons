import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRoomService = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,19V16A11.007,11.007,0,0,0,13.5,5.115V4.31a1.995,1.995,0,1,0-3,0v.805A11.007,11.007,0,0,0,1,16v3H0v3H24V19ZM4,16C4.4,5.4,19.6,5.407,20,16v3H4Z"/></svg>

);
