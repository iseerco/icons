import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PalletAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,17h24v5h-2v-3h-9v3h-2v-3H2v3H0v-5Zm12-2H0V6c0-1.654,1.346-3,3-3h6c1.654,0,3,1.346,3,3v9Zm12-7v7h-10v-7c0-1.654,1.346-3,3-3h4c1.654,0,3,1.346,3,3Z"/>
</svg>

);
