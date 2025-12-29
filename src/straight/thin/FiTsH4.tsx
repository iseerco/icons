import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsH4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,4h1v16h-1v-7.5H1v7.5H0V4h1v7.5h10v-7.5Zm12,0v10h-6.5c-.827,0-1.5-.673-1.5-1.5V4h-1v8.5c0,1.379,1.121,2.5,2.5,2.5h6.5v5h1V4h-1Z"/></svg>

);
