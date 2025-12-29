import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretSquareLeft_1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,19V5A5.006,5.006,0,0,1,5,0H19a5.006,5.006,0,0,1,5,5V19a5.006,5.006,0,0,1-5,5H5A5.006,5.006,0,0,1,0,19ZM22,5a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3ZM13.4,6.269,8.25,11.356a.9.9,0,0,0,0,1.288L13.4,17.731a.924.924,0,0,0,1.575-.644V6.913A.924.924,0,0,0,13.4,6.269Z"/></svg>

);
