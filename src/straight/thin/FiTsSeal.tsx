import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSeal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,23.957l-3.457-3.457H3.5v-5.043L.043,12l3.457-3.457V3.5h5.043L12,.043l3.457,3.457h5.043v5.043l3.457,3.457-3.457,3.457v5.043h-5.043l-3.457,3.457Zm-7.5-4.457h4.457l3.043,3.043,3.043-3.043h4.457v-4.457l3.043-3.043-3.043-3.043v-4.457h-4.457l-3.043-3.043-3.043,3.043h-4.457v4.457l-3.043,3.043,3.043,3.043v4.457Z"/>
</svg>

);
