import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LessThanEqual = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,2.27l-14.028,7.23,14.028,7.32v2.168L2.5,9.5,21,.026v2.245ZM3,24h18v-2H3v2Z"/>
</svg>

);
