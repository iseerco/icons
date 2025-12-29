import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentAltMiddleTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,24H4C1.793,24,0,22.206,0,20V8C0,5.794,1.793,4,4,4h2.924L10.691,.826c.737-.656,1.881-.657,2.638,.018l3.819,3.156h2.852c2.206,0,4,1.794,4,4v12c0,2.206-1.794,4-4,4Z"/></svg>

);
