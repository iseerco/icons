import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Review = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8,12c-3.309,0-6-2.691-6-6S4.691,0,8,0s6,2.691,6,6-2.691,6-6,6Zm11.826,4h4.174v1l-3.054,2.083,1.271,3.982-.818.571-3.382-2.338-3.331,2.338-.787-.593,1.181-4.022-3.079-2.016v-1.006h4.2l1.285-4.363h1.059l1.283,4.363h0Zm-9.826,2c0-1.457.39-2.823,1.071-4h-6.071c-2.757,0-5,2.243-5,5v5h12.709c-1.661-1.466-2.709-3.61-2.709-6Z"/>
</svg>

);
