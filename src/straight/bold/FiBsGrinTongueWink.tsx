import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGrinTongueWink = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7,13H17v3H14.5c-.085,3.954-4.917,3.95-5,0H7Zm17-1A12.013,12.013,0,0,1,12,24C-3.9,23.4-3.893.6,12,0A12.013,12.013,0,0,1,24,12Zm-3,0a9.011,9.011,0,0,0-9-9C.077,3.453.08,20.549,12,21A9.011,9.011,0,0,0,21,12ZM15.5,7A2.587,2.587,0,0,0,13,9.667V11h5V9.667A2.587,2.587,0,0,0,15.5,7ZM11,8H6v3h5Z"/></svg>

);
