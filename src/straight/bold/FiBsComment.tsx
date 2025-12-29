import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsComment = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H12.017A12,12,0,1,1,24,11.246l0,.094ZM12.017,3a9,9,0,1,0,0,18H21V11.389A9.015,9.015,0,0,0,12.017,3Z"/><rect x="8" y="8" width="6" height="3"/><rect x="8" y="14" width="10" height="3"/></svg>

);
