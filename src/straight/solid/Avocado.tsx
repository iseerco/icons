import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Avocado = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.037,9.11a14.989,14.989,0,0,1-2.448-4.755A5.762,5.762,0,0,0,12,0C8.606,0,2,5.23,2,14.818,2,19.881,6.486,24,12,24s10-4.119,10-9.182A8.27,8.27,0,0,0,20.037,9.11ZM12,20a3.913,3.913,0,0,1-4-4c0-2.972,2.019-6,4-6s4,3.028,4,6A3.913,3.913,0,0,1,12,20Zm2-4a1.913,1.913,0,0,1-2,2,1.913,1.913,0,0,1-2-2c0-2.295,1.531-4,2-4S14,13.705,14,16Z"/></svg>

);
