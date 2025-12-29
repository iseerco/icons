import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFrame = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,6v-3h-3V0h-3v3H6V0h-3v3H0v3h3v12H0v3h3v3h3v-3h12v3h3v-3h3v-3h-3V6h3Zm-6,12H6V6h12v12Z"/>
</svg>

);
