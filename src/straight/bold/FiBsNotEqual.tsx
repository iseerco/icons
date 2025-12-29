import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsNotEqual = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15.011,9l-2.727,6h11.716v3h-13.08l-2.714,5.971-2.73-1.242,2.149-4.729H0v-3h8.989l2.727-6H0v-3h13.08L15.794.029l2.73,1.242-2.149,4.729h7.625v3h-8.989Z"/>
</svg>

);
