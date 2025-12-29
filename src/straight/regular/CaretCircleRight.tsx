import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretCircleRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12A12,12,0,1,1,12,0,12.013,12.013,0,0,1,24,12ZM2,12A10,10,0,1,0,12,2,10.011,10.011,0,0,0,2,12Zm8-6V18l5.65-5.17a1.115,1.115,0,0,0,0-1.66Z"/></svg>

);
