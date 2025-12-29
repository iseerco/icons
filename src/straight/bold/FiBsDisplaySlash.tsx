import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDisplaySlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.121,18h3.878V4c0-1.654-1.346-3-3-3H3.121L2.111-.011-.01,2.11l21.9,21.9,2.121-2.121-3.889-3.889Zm.878-14v11h-3.878L6.121,4h14.878Zm-5.95,16l2.45,2.45v.55H6.5v-3h4v-2H0V4.95l3,3v7.05h7.05l3.45,3.45v1.55h1.55Z"/>
</svg>

);
