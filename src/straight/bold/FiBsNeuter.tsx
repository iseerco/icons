import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsNeuter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,8C20,3.589,16.411,0,12,0S4,3.589,4,8c0,3.898,2.803,7.154,6.5,7.858v8.142h3v-8.142c3.697-.704,6.5-3.96,6.5-7.858Zm-8,5c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Z"/>
</svg>

);
