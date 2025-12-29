import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretSquareLeft_1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,19V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19A5.006,5.006,0,0,0,24,19ZM13.4,17.731,8.25,12.644a.9.9,0,0,1,0-1.288L13.4,6.269a.924.924,0,0,1,1.575.644V17.087A.924.924,0,0,1,13.4,17.731Z"/></svg>

);
