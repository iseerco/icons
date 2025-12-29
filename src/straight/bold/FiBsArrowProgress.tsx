import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowProgress = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m5,19.5c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5Zm16.5-2.5c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5-1.119-2.5-2.5-2.5Zm-8.5-1.5v2.5h-6v3h6v2.5l3.74-3.372c.347-.347.347-.91,0-1.257l-3.74-3.371Zm8.5-8.5c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm-1.5,8h3c0-2.757-2.243-5-5-5H5c-1.103,0-2-.897-2-2s.897-2,2-2h8v2.5l3.74-3.372c.347-.347.347-.91,0-1.257l-3.74-3.371v2.5H5C2.243,3,0,5.243,0,8s2.243,5,5,5h13c1.103,0,2,.897,2,2Z"/>
</svg>

);
