import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretCircleRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm15.65-.83a1.115,1.115,0,0,1,0,1.66L10,18V6Z"/></svg>

);
