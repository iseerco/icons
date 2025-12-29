import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsH4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9,4h3v16h-3v-7H3v7H0V4h3v6h6v-6Zm12,0v8h-3.5c-.275,0-.5-.225-.5-.5v-7.5h-3v7.5c0,1.93,1.57,3.5,3.5,3.5h3.5v5h3V4h-3Z"/></svg>

);
