import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LaughSquint = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.555,7.832,15.8,9l1.752,1.168a1,1,0,1,1-1.11,1.664l-3-2a1.007,1.007,0,0,1,0-1.664l3-2a1,1,0,0,1,1.11,1.664Zm-10,4,3-2a1.007,1.007,0,0,0,0-1.664l-3-2a1,1,0,1,0-1.11,1.664L8.2,9,6.445,10.168a1,1,0,0,0,1.11,1.664ZM15.99,14H8.009a.994.994,0,0,0-.955,1.3,5.178,5.178,0,0,0,9.9-.007A.994.994,0,0,0,15.99,14ZM24,12A12.013,12.013,0,0,1,12,24C-3.9,23.4-3.893.6,12,0A12.013,12.013,0,0,1,24,12Zm-2,0A10.011,10.011,0,0,0,12,2c-13.248.5-13.245,19.5,0,20A10.011,10.011,0,0,0,22,12Z"/></svg>

);
