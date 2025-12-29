import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DownLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.97,23H4s0,0,0,0c-.8,0-1.55-.31-2.12-.88-.57-.57-.88-1.32-.88-2.13V6.03s4.97,4.92,4.97,4.92L16.16,.76l7.07,7.07-10.19,10.19,4.94,4.98Zm-13.98-2H13.17s-2.96-2.98-2.96-2.98L20.4,7.83l-4.24-4.24L5.97,13.78l-2.98-2.95v9.16c0,.27,.11,.52,.3,.71s.44,.29,.71,.29h0Z"/></svg>

);
