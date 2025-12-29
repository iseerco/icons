import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cloud = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.792,7.212A8,8,0,0,0,2,9a7.915,7.915,0,0,0,.9,3.671A5.49,5.49,0,0,0,5.5,23H16A8,8,0,0,0,17.792,7.212ZM16,21H5.5a3.491,3.491,0,0,1-.872-6.874,1,1,0,0,0,.554-1.564A5.936,5.936,0,0,1,4,9a6,6,0,0,1,11.94-.8,1,1,0,0,0,.858.86A6,6,0,0,1,16,21Z"/></svg>

);
