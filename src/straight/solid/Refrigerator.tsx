import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Refrigerator = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2,9V3c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v6h-5v-4h-2v4H2Zm15,2v7h-2v-7H2v13h20v-13h-5Z"/>
</svg>

);
