import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const J = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,24H5c-1.654,0-3-1.346-3-3v-4.111h2v4.111c0,.551,.448,1,1,1h14c.552,0,1-.449,1-1V0h2V21c0,1.654-1.346,3-3,3Z"/></svg>

);
