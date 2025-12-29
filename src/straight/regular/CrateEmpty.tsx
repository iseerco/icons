import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CrateEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,10v11c0,1.654,1.346,3,3,3h18c1.654,0,3-1.346,3-3v-11H0Zm22,11c0,.551-.448,1-1,1H3c-.552,0-1-.449-1-1v-1h18v-2H2v-2h18v-2H2v-2h20v9Z"/>
</svg>

);
