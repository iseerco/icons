import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LessThanEqual = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,18.988L2.5,9.5,21,.026v2.245l-14.028,7.23,14.028,7.32v2.168Zm0,3.012H3v2h18v-2Z"/>
</svg>

);
