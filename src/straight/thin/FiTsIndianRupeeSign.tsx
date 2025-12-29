import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsIndianRupeeSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,1h-7.4c1.76,1.06,3.02,2.88,3.33,5h4.07v1h-4c0,3.86-3.14,7-7,7H4.32l11.94,10h-1.57L3,14.27v-1.27h7c3.31,0,6-2.69,6-6H3v-1H15.92c-.48-2.83-2.95-5-5.92-5H3V0H21V1Z"/></svg>

);
