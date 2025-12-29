import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GreaterThanEqual = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,9.5L3,18.988v-2.168l14.028-7.32L3,2.27V.026l18.5,9.474ZM3,24h18v-2H3v2Z"/>
</svg>

);
