import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RotateRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,12a10,10,0,1,1-2.86-7H15V7h5.143A1.859,1.859,0,0,0,22,5.143V0H20V3.06A12,12,0,1,0,24,12Z"/></svg>

);
