import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTableLayout = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,2H5.5C2.467,2,0,4.468,0,7.5v9c0,3.032,2.467,5.5,5.5,5.5h13c3.033,0,5.5-2.468,5.5-5.5V7.5c0-3.032-2.467-5.5-5.5-5.5ZM5.5,5h13c1.207,0,2.217,.86,2.45,2H3.05c.232-1.14,1.242-2,2.45-2Zm-2.5,11.5v-6.5H7v9h-1.5c-1.378,0-2.5-1.121-2.5-2.5Zm15.5,2.5H10V10h11v6.5c0,1.379-1.122,2.5-2.5,2.5Z"/></svg>

);
