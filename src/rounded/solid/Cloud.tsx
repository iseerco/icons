import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cloud = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.792,7.212A8,8,0,0,0,2,9a7.915,7.915,0,0,0,.9,3.671A5.49,5.49,0,0,0,5.5,23H16A8,8,0,0,0,17.792,7.212Z"/></svg>

);
