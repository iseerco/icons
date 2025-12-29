import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTruckContainer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,4.5A3.5,3.5,0,0,0,9.5,1h-6A3.5,3.5,0,0,0,0,4.5V15H13ZM10,12H8V6H5v6H3V4.5A.5.5,0,0,1,3.5,4h6a.5.5,0,0,1,.5.5Zm14,1.149a5.5,5.5,0,0,0-.282-1.739L22.379,7.393A3.5,3.5,0,0,0,19.059,5H15V17H0v3.5A2.5,2.5,0,1,0,4.95,20h1.1a2.5,2.5,0,1,0,4.9,0h6.1a2.5,2.5,0,1,0,4.9,0H24ZM19.059,8a.5.5,0,0,1,.474.342l1.339,4.016a2.505,2.505,0,0,1,.128.791V13.5H18V8Z"/></svg>

);
