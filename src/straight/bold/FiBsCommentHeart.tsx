import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCommentHeart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H12A12,12,0,1,1,24,12ZM12,3a9,9,0,0,0,0,18h9V12A9.01,9.01,0,0,0,12,3Zm2.5,5A2.634,2.634,0,0,0,12,10.75,2.634,2.634,0,0,0,9.5,8,2.634,2.634,0,0,0,7,10.75C7,13.63,12,17,12,17s5-3.37,5-6.25A2.634,2.634,0,0,0,14.5,8Z"/></svg>

);
