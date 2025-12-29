import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserPen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,12c3.309,0,6-2.691,6-6S12.309,0,9,0,3,2.691,3,6s2.691,6,6,6Zm7.086,12h-3.086s0-3.086,0-3.086l7.275-7.275c.852-.852,2.234-.852,3.086,0h0c.852,.852,.852,2.234,0,3.086l-7.275,7.275Zm-5.086,0H0v-5c0-2.757,2.243-5,5-5H13c1.145,0,2.189,.403,3.033,1.053l-5.033,5.033v3.914Z"/></svg>

);
