import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrGraphicTablet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,3H5.5A5.5,5.5,0,0,0,0,8.5V11H2.006A.994.994,0,0,1,3,11.994H3a.993.993,0,0,1-.994.993H0V15.5A5.5,5.5,0,0,0,5.5,21h13A5.5,5.5,0,0,0,24,15.5v-7A5.5,5.5,0,0,0,18.5,3ZM21,15.5A2.462,2.462,0,0,1,18.583,18H6.981V6h11.6A2.462,2.462,0,0,1,21,8.5Z"/></svg>

);
