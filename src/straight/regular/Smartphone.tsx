import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Smartphone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M4,0V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V0ZM18,2V16H6V2ZM17,22H7a1,1,0,0,1-1-1V18H18v3A1,1,0,0,1,17,22Z"/><rect x="11" y="19" width="2" height="2"/></g></svg>

);
