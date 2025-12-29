import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowProgressAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,8c0-2.206,1.794-4,4-4h16.893l-2.014-1.805,1.338-1.486,3.123,2.811c.419.375.66.916.66,1.48s-.241,1.105-.662,1.482l-3.121,2.81-1.338-1.486,2.005-1.805H4c-1.103,0-2,.897-2,2s.897,2,2,2h14c2.206,0,4,1.794,4,4h-2c0-1.103-.897-2-2-2H4c-2.206,0-4-1.794-4-4Zm12.217,6.708l-1.338,1.486,2.029,1.805h-4.909v2h4.847l-2.004,1.746,1.313,1.508,3.182-2.772c.42-.377.662-.917.662-1.482s-.241-1.105-.66-1.48l-3.123-2.811Zm-12.217,1.292h6v6H0v-6Zm18,0h6v6h-6v-6Z"/>
</svg>

);
