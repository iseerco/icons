import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Label = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.457,4.555,12.486.126a1,1,0,0,0-.972,0L3.543,4.555A3,3,0,0,0,2,7.177V19a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V7.177A3,3,0,0,0,20.457,4.555ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V7.177A1,1,0,0,1,4.515,6.3L12,2.144,19.486,6.3A1,1,0,0,1,20,7.177Z"/><circle cx="12" cy="7" r="1.5"/></svg>

);
