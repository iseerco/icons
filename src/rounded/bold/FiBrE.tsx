import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrE = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,21H7.5c-1.379,0-2.5-1.122-2.5-2.5v-5.5h11.5c1.972-.034,1.971-2.967,0-3H5V5.5c0-1.378,1.121-2.5,2.5-2.5h13c1.972-.034,1.971-2.967,0-3H7.5C4.468,0,2,2.467,2,5.5v13c0,3.033,2.468,5.5,5.5,5.5h13c1.972-.034,1.971-2.967,0-3Z"/></svg>

);
