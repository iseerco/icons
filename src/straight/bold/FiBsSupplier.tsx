import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSupplier = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,12c3.309,0,6-2.691,6-6S12.309,0,9,0,3,2.691,3,6s2.691,6,6,6Zm0-9c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm13,11h-7c-1.105,0-2,.895-2,2v8h11v-8c0-1.105-.895-2-2-2Zm-2,5h-3v-2h3v2Zm-11-1.778l2-2.285v4.556l-2,2.286-4.114-4.702c-1.083.274-1.886,1.257-1.886,2.424v4.5H0v-4.5c0-3.032,2.467-5.5,5.5-5.5h.681l2.819,3.222Z"/>
</svg>

);
