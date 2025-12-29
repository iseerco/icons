import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrL = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,24H7.5c-3.033,0-5.5-2.468-5.5-5.5V1.5c.033-1.972,2.967-1.971,3,0V18.5c0,1.379,1.122,2.5,2.5,2.5h13c1.972,.034,1.971,2.967,0,3Z"/></svg>

);
