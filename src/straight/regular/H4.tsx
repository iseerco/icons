import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const H4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10,4h2v16h-2v-7H2v7H0V4h2v7h8v-7Zm12,0v9h-5c-.552,0-1-.448-1-1V4h-2v8c0,1.654,1.346,3,3,3h5v5h2V4h-2Z"/></svg>

);
