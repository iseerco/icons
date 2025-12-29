import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBookmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,24.173,12,13.463,1.5,24.173V3a3,3,0,0,1,3-3h15a3,3,0,0,1,3,3ZM12,9.178l7.5,7.649V3H4.5V16.827Z"/></svg>

);
