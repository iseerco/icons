import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBowlScoop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,11h-1C2,5.486,6.486,1,12,1s10,4.486,10,10h-1c0-4.963-4.037-9-9-9S3,6.037,3,11Zm21.043,2l-1.898,3.977c-1.856,3.101-3.795,3.077-6.719,3.032-.37-.005-2.926-.011-2.926-.011v3.002h4.5v1H7v-1h4.5v-3.002s-3.449.002-3.751.002c-2.416,0-4.126-.263-5.756-2.982L.072,13h23.971Zm-1.585,1H1.658l1.215,2.545c1.515,2.523,2.941,2.507,5.803,2.464.375-.005,6.389-.005,6.764,0,2.856.041,4.288.06,5.825-2.505l1.193-2.504Z"/>
</svg>

);
