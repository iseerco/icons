import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentAltMiddleTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,24H3C1.346,24,0,22.654,0,21V4H6.923L10.691,.826c.737-.656,1.882-.657,2.638,.018l3.819,3.157h6.853V21c0,1.654-1.346,3-3,3Z"/></svg>

);
