import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.836.029c-3.469-.235-6.875,1.036-9.328,3.492S-.211,9.378.03,12.854c.44,6.354,6.052,11.146,13.053,11.146h5.917c2.757,0,5-2.243,5-5v-6.66C24,5.862,19.097.454,12.836.029Zm3.164,12.971h-8c-.552,0-1-.448-1-1s.448-1,1-1h8c.553,0,1,.448,1,1s-.447,1-1,1Z"/></svg>

);
