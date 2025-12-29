import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Lighthouse = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,2.5L12,0l-5,2.5v5.424l-1.988,12.924-.012,3.152h6v-3c0-.552.448-1,1-1s1,.448,1,1v3h6v-3l-2-13.076V2.5Zm-2,1.5v3h-6.009l.008-3h6.001Zm2,18h-2v-1c0-1.654-1.346-3-3-3s-3,1.346-3,3v1h-2v-.924l1.858-12.076h6.295l1.847,12.076v.924ZM5,4.5L0,2.625V.488l5,1.875v2.137Zm0,4.137l-5,1.875v-2.137l5-1.875v2.137ZM24,.488v2.137l-5,1.875v-2.137l5-1.875Zm-5,6.012l5,1.875v2.137l-5-1.875v-2.137Z"/>
</svg>

);
