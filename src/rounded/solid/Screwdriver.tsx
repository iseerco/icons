import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Screwdriver = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.479,1.839l-1.318-1.319c-.568-.568-1.447-.684-2.143-.283l-3.832,2.211c-.733.423-1.185,1.205-1.185,2.051v3.086l-4.726,4.726c-1.115-.525-2.482-.339-3.404.58L.982,18.764c-1.111,1.108-1.325,2.916-.329,4.129,1.145,1.395,3.212,1.472,4.458.229l6.01-5.993c.926-.923,1.109-2.295.574-3.409l4.72-4.72h3.086c.846,0,1.629-.452,2.051-1.185l2.21-3.833c.401-.696.285-1.575-.283-2.143Z"/>
</svg>

);
