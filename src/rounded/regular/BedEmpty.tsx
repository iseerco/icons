import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BedEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,11H2V3c0-.552-.448-1-1-1s-1,.448-1,1v18c0,.552.448,1,1,1s1-.448,1-1v-2h20v2c0,.552.447,1,1,1s1-.448,1-1v-5c0-2.757-2.243-5-5-5ZM2,17v-4h17c1.654,0,3,1.346,3,3v1H2Z"/>
</svg>

);
