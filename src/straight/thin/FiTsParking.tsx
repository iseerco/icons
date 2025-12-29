import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsParking = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,0H2.5C1.121,0,0,1.122,0,2.5V24H24V2.5c0-1.378-1.121-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V23ZM13.5,5h-4c-1.379,0-2.5,1.122-2.5,2.5v11.5h1v-5h5.5c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5Zm0,8h-5.5V7.5c0-.827,.673-1.5,1.5-1.5h4c1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5Z"/></svg>

);
