import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mouse = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M15.5,3H13V0H11V3H8.5A4.505,4.505,0,0,0,4,7.5V16a8,8,0,0,0,16,0V7.5A4.505,4.505,0,0,0,15.5,3ZM18,16A6,6,0,0,1,6,16V7.5A2.5,2.5,0,0,1,8.5,5h7A2.5,2.5,0,0,1,18,7.5Z"/><rect x="11" y="7" width="2" height="4"/></g></svg>

);
