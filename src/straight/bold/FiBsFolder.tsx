import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,3H12.369L8.551,1H3A3,3,0,0,0,0,4V23H24V6A3,3,0,0,0,21,3ZM3,20V7.967H21V20Z"/></svg>

);
