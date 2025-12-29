import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7.065,7.727l-2.78,2.78L24,10.532l0,3L4.3,13.507l2.765,2.764-2.121,2.12L1.025,14.474a3.5,3.5,0,0,1,0-4.949L4.944,5.607Z"/></svg>

);
