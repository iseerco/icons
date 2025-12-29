import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTreeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.603,22l-3.477-6h2.445l-3.958-6h2.101L14.501,1.183c-.592-.751-1.503-1.183-2.501-1.183s-1.91.432-2.501,1.183l-5.212,8.817h2.101l-3.958,6h2.445l-3.477,6h9.103v2h3v-2h9.103Zm-16-3l3.477-6h-2.078l3.958-6h-2.423l2.344-3.978c.049-.021.189-.021.238,0l2.344,3.978h-2.423l3.958,6h-2.078l3.477,6h-3.897v-2.737l-1.5-2.589-1.5,2.589v2.737h-3.897Z"/>
</svg>

);
