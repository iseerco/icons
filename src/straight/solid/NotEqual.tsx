import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NotEqual = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <polygon points="24 9 24 7 15.371 7 18.16 .864 16.34 .036 13.174 7 0 7 0 9 12.265 9 9.538 15 0 15 0 17 8.629 17 5.84 23.136 7.66 23.964 10.826 17 24 17 24 15 11.735 15 14.462 9 24 9"/>
</svg>

);
