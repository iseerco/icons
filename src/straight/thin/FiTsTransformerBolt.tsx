import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTransformerBolt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,6v-1h-4v-3h-2V0h-1v2h-2v3h-4v-3h-2V0h-1v2h-2v3H1v1h2v17H1v1h22v-1h-2V6h2Zm-8-3h3v2h-3v-2Zm-9,0h3v2h-3v-2Zm14,20H4V6h16v17Zm-11.015-9.837l3.092-4.93.846.534-2.994,4.739c-.019.112.008.227.078.32.081.109.204.171.339.171h3.247c.519,0,.993.284,1.238.74.246.457.22,1.009-.066,1.442l-2.759,4.579-.856-.517,2.771-4.597c.132-.201.065-.37.031-.434-.035-.064-.138-.213-.357-.213h-3.247c-.455,0-.871-.209-1.142-.575s-.351-.825-.219-1.26Z"/>
</svg>

);
