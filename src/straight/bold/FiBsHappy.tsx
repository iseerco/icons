import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHappy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,3a9,9,0,1,0,9,9A9.011,9.011,0,0,0,12,3Zm5.5,12.819-1.994-2.242A6.147,6.147,0,0,1,12,15a6.142,6.142,0,0,1-3.5-1.418l-2,2.237A9.17,9.17,0,0,0,12,18,9.17,9.17,0,0,0,17.5,15.819ZM6,9.667V11h5V9.667A2.587,2.587,0,0,0,8.5,7,2.587,2.587,0,0,0,6,9.667Zm7,0V11h5V9.667A2.587,2.587,0,0,0,15.5,7,2.587,2.587,0,0,0,13,9.667Z"/></svg>

);
