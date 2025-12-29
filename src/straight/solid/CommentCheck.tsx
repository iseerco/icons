import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0a12,12,0,0,0,0,24H24V12A12.013,12.013,0,0,0,12,0Zm-.091,16.419a2,2,0,0,1-2.823,0L5.3,12.715l1.4-1.43,3.793,3.707,6.806-6.7,1.4,1.424Z"/></svg>

);
