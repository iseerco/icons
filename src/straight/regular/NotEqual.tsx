import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NotEqual = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14.462,9l-2.727,6h12.265v2h-13.174l-3.165,6.964-1.82-.828,2.789-6.136H0v-2h9.538l2.727-6H0v-2h13.174L16.34.036l1.82.828-2.789,6.136h8.629v2h-9.538Z"/>
</svg>

);
