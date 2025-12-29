import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrRectanglesMixed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10.5,13h-6c-1.378,0-2.5,1.121-2.5,2.5v2.5c0,2.757,2.243,5,5,5h3.5c1.378,0,2.5-1.121,2.5-2.5v-5c0-1.379-1.122-2.5-2.5-2.5Zm-.5,7h-3c-1.103,0-2-.897-2-2v-2h5v4Zm.5-19h-5.5C2.243,1,0,3.243,0,6v2.5c0,1.379,1.122,2.5,2.5,2.5h8c1.378,0,2.5-1.121,2.5-2.5V3.5c0-1.379-1.122-2.5-2.5-2.5Zm-.5,7H3v-2c0-1.103.897-2,2-2h5v4Zm9-5h-1.5c-1.378,0-2.5,1.121-2.5,2.5v12c0,1.379,1.122,2.5,2.5,2.5h1.5c2.757,0,5-2.243,5-5v-7c0-2.757-2.243-5-5-5Zm2,12c0,1.103-.897,2-2,2h-1V6h1c1.103,0,2,.897,2,2v7Z"/>
</svg>

);
