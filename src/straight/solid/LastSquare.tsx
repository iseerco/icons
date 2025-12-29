import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LastSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M9,9.773l3.96,2.227-3.96,2.228v-4.455ZM24,3V24H0V3C0,1.346,1.346,0,3,0H21c1.654,0,3,1.346,3,3Zm-7,3.5h-2v4.353L7,6.353v11.294l8-4.5v4.352h2V6.5Z"/>
</svg>

);
