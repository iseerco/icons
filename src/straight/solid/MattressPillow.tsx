import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MattressPillow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,3h7v18H3c-1.654,0-3-1.346-3-3v-1h7V7H0v-1c0-1.654,1.346-3,3-3ZM0,9v6h5v-6H0ZM21,3h-9v18h9c1.654,0,3-1.346,3-3V6c0-1.654-1.346-3-3-3Z"/>
</svg>

);
