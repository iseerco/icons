import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Screen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M24,19V6a3,3,0,0,0-3-3H3A3,3,0,0,0,0,6V19H11v1H7v2H17V20H13V19ZM2,6A1,1,0,0,1,3,5H21a1,1,0,0,1,1,1V17H2Z"/></g></svg>

);
