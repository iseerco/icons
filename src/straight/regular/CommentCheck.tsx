import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H12A12,12,0,1,1,24,12ZM12,2a10,10,0,0,0,0,20H22V12A10.011,10.011,0,0,0,12,2Zm-.091,14.419L18.7,9.712,17.3,8.288l-6.806,6.7L6.7,11.285l-1.4,1.43,3.785,3.7a2,2,0,0,0,2.823,0Z"/></svg>

);
