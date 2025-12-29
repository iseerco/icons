import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLaptop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,15V3H2V15H0v2a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V15Zm-7.231,1H9.231l-.923-1H5V6H19v9H15.692Z"/></svg>

);
