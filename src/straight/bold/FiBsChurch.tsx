import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChurch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,5.769v-1.769h2v-2h-2V0h-2v2h-2v2h2v1.769L0,13.736v10.264h24v-10.264l-11-7.967Zm-1,2.983l4,2.909v9.339h-2v-3c0-1.105-.895-2-2-2s-2,.895-2,2v3h-2v-9.339l4-2.909ZM3,15.264l2-1.455v7.191h-2v-5.736Zm18,5.736h-2v-7.191l2,1.455v5.736Z"/>
</svg>

);
