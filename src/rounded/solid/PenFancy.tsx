import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PenFancy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.968,2.506c0,.678-.264,1.316-.744,1.795l-9.547,9.547-3.59-3.59L19.635.711c.99-.99,2.6-.99,3.59,0,.479.479.744,1.117.744,1.795Zm-15.768,8.694l-3.556,1.09c-1.438.452-2.546,1.645-2.891,3.113L.091,22.495l5.202-5.202c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-5.202,5.202,7.093-1.663c1.468-.345,2.66-1.452,3.112-2.89l1.111-3.534-4.622-4.622Z"/></svg>

);
