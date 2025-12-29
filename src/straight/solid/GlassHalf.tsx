import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GlassHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2.016,11L1.111,0h21.774l-.967,11H2.016Zm.164,2l.678,8.246c.127,1.544,1.44,2.754,2.99,2.754h12.18c1.566,0,2.852-1.177,2.988-2.737l.726-8.263H2.18Z"/>
</svg>

);
