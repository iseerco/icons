import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bridge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M0,0V12.929l.834,.14c2.414,.405,4.166,2.479,4.166,4.931v6h2v-6c0-2.757,2.243-5,5-5s5,2.243,5,5v6h2v-6c0-2.452,1.752-4.525,4.166-4.931l.834-.14V0H0ZM22,5h-3.5V2h3.5v3Zm-14.5,0V2h3.5v3h-3.5Zm5.5-3h3.5v3h-3.5V2Zm-7.5,0v3H2V2h3.5Z"/>
</svg>

);
