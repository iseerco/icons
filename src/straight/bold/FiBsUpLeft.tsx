import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUpLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.18,23.3L6.48,13.61,1,18.94V4.41c0-.91,.36-1.76,1-2.41,.64-.64,1.5-1,2.4-1h14.55s-5.34,5.48-5.34,5.48l9.69,9.69-7.12,7.12ZM6.52,9.39l9.66,9.66,2.88-2.88L9.39,6.51l2.45-2.51H4.41s0,0,0,0c-.14,0-.23,.06-.29,.12-.05,.05-.12,.15-.12,.28v7.43s2.51-2.44,2.51-2.44Z"/></svg>

);
