import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Lighthouse = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,.488l5,1.875v2.137L0,2.625V.488Zm0,10.023l5-1.875v-2.137l-5,1.875v2.137ZM24,.488l-5,1.875v2.137s5-1.875,5-1.875V.488Zm0,7.887l-5-1.875v2.137s5,1.875,5,1.875v-2.137Zm-5,13.777v1.848h-5v-3c0-1.105-.895-2-2-2s-2,.895-2,2v3h-5l.012-2,1.988-14.076V2.5L12,0l5,2.5v5.424l2,14.229ZM15,4h-6.001l-.008,3h6.009v-3Z"/>
</svg>

);
