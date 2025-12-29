import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentAltMiddleTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,24H3C1.346,24,0,22.654,0,21V4H6.923L10.691,.826c.737-.656,1.881-.656,2.638,.018l3.819,3.156h6.853V21c0,1.654-1.346,3-3,3ZM2,6v15c0,.551,.448,1,1,1H21c.552,0,1-.449,1-1V6h-5.571l-4.401-3.639-4.374,3.639H2Z"/></svg>

);
