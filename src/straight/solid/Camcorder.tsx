import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Camcorder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,19H5V11H14v8Zm7-8.756v9.513l3,2.236V8.007l-3,2.236Zm-2-1.244v15H0V9c0-1.654,1.346-3,3-3H12.086l-3-3H0V1H9.914l5,5h1.086c1.654,0,3,1.346,3,3Zm-3,0H3v12h13V9Z"/></svg>

);
