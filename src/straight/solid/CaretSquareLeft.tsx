import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretSquareLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12Zm-15.65.83a1.115,1.115,0,0,1,0-1.66L14,6V18Z"/></svg>

);
