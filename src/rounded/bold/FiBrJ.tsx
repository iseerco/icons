import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrJ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.5,24H7.5c-3.032,0-5.5-2.467-5.5-5.5v-1c.034-1.972,2.967-1.971,3,0v1c0,1.378,1.121,2.5,2.5,2.5h9c1.379,0,2.5-1.122,2.5-2.5V1.5c.034-1.972,2.967-1.971,3,0V18.5c0,3.033-2.468,5.5-5.5,5.5Z"/></svg>

);
