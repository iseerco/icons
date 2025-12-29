import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretSquareRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,5V19a5.006,5.006,0,0,1-5,5H5a5.006,5.006,0,0,1-5-5V5A5.006,5.006,0,0,1,5,0H19A5.006,5.006,0,0,1,24,5ZM2,19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5Zm8.6-1.269,5.154-5.087a.9.9,0,0,0,0-1.288L10.6,6.269a.924.924,0,0,0-1.575.644V17.087A.924.924,0,0,0,10.6,17.731Z"/></svg>

);
