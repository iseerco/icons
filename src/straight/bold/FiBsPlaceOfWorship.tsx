import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPlaceOfWorship = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,8.679V3.679L12,.042l-5,3.636v5L0,13.736v10.264h24v-10.264l-7-5.058Zm-7,1.527v-5l2-1.455,2,1.455v5l2,1.455v9.339h-2v-3c0-1.105-.895-2-2-2s-2,.895-2,2v3h-2v-9.339l2-1.455Zm-7,5.058l2-1.455v7.191h-2v-5.736Zm18,5.736h-2v-7.191l2,1.455v5.736Zm-10.5-8.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Z"/>
</svg>

);
