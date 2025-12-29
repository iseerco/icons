import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GreaterThanEqual = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,16.82l14.028-7.32L3,2.27V.026s18.5,9.474,18.5,9.474L3,18.988v-2.168Zm18,5.18H3v2h18v-2Z"/>
</svg>

);
