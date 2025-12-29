import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Right = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,23.94v-6.93H0V7.01H13V.06l10.11,9.82c.58,.58,.89,1.33,.89,2.13s-.31,1.56-.88,2.13h0s-10.11,9.8-10.11,9.8ZM2,15.01H15v4.21l6.71-6.5c.19-.19,.29-.44,.29-.71s-.1-.52-.29-.71l-6.71-6.51v4.22H2v6Z"/></svg>

);
