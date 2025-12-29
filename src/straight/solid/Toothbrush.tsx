import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Toothbrush = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,3V0h-2c0,1.103-.897,2-2,2H7C3.141,2,0,5.141,0,9v1h3v8c-1.654,0-3,1.346-3,3s1.346,3,3,3h21v-6h-3v-9.264c1.811-1.267,3-3.364,3-5.736Zm-13,7v8h-2v-8h2Zm2,0h2v8h-2v-8Zm-8,0h2v8h-2v-8Zm14,8h-2v-8c.695,0,1.366-.105,2-.295v8.295Z"/></svg>

);
