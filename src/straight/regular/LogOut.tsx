import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LogOut = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M15,2.426v2.1a9,9,0,1,1-6,0v-2.1a11,11,0,1,0,6,0Z"/><rect x="11" width="2" height="8"/></g></svg>

);
