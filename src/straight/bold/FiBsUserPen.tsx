import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUserPen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,12c3.309,0,6-2.691,6-6S12.309,0,9,0,3,2.691,3,6s2.691,6,6,6Zm0-9c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm14.361,13.725l-7.275,7.275h-3.086v-3.086l7.275-7.275c.852-.852,2.234-.852,3.086,0s.852,2.234,0,3.086Zm-10.361,.275H5c-1.103,0-2,.897-2,2v5H0v-5c0-2.757,2.243-5,5-5H13c1.145,0,2.189,.403,3.033,1.053l-2.158,2.158c-.266-.131-.56-.211-.876-.211Z"/></svg>

);
