import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsEject = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,21v1H0v-1h24Zm-.032-2H.032L12,2.136l11.968,16.864Zm-22-1h20.064L12,3.864,1.968,18Z"/></svg>

);
