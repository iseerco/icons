import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareV = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm-6,17c-.673,1.531-1.642,2-3,2-1.358,0-2.327-.469-3-2L5,5h2.149l3.717,11.273c.318.691.549.727,1.135.727.584,0,.816-.037,1.134-.727l3.877-11.273h1.989l-4,12Z"/></svg>

);
