import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GlassEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.027,24H5.848c-1.549,0-2.863-1.209-2.99-2.754L1.111,0h21.773l-1.869,21.263c-.136,1.56-1.42,2.737-2.988,2.737Z"/>
</svg>

);
