import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretSquareLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,12A12,12,0,1,1,12,24,12.013,12.013,0,0,1,0,12Zm22,0A10,10,0,1,0,12,22,10.011,10.011,0,0,0,22,12Zm-8,6V6L8.35,11.17a1.115,1.115,0,0,0,0,1.66Z"/></svg>

);
