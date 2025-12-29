import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLaugh = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,13c0,2-2,5-4.993,5S7,15,7,13Zm7-1A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12Zm-3,0a9,9,0,1,1-9-9A9.011,9.011,0,0,1,21,12ZM6,9.667V11h5V9.667A2.587,2.587,0,0,0,8.5,7,2.587,2.587,0,0,0,6,9.667Zm7,0V11h5V9.667A2.587,2.587,0,0,0,15.5,7,2.587,2.587,0,0,0,13,9.667Z"/></svg>

);
