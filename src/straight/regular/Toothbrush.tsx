import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Toothbrush = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,3V0h-2c0,1.103-.897,2-2,2H7C3.141,2,0,5.141,0,9v1h3v8c-1.654,0-3,1.346-3,3s1.346,3,3,3h21v-2H3c-.552,0-1-.448-1-1s.448-1,1-1h21v-2h-3v-9.259c1.812-1.266,3-3.368,3-5.741Zm-17,1h13c.719,0,1.394-.19,1.978-.523-.24,2.534-2.381,4.523-4.978,4.523H2.101c.465-2.279,2.484-4,4.899-4Zm4,6v8h-2v-8h2Zm2,0h2v8h-2v-8Zm-8,0h2v8h-2v-8Zm14,8h-2v-8c.695,0,1.366-.102,2-.292v8.292Z"/></svg>

);
