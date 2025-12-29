import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Computer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M24,19V4a3,3,0,0,0-3-3H3A3,3,0,0,0,0,4V19H11v2H6v2H18V21H13V19ZM3,3H21a1,1,0,0,1,1,1v9H2V4A1,1,0,0,1,3,3ZM2,15H22v2H2Z"/></g></svg>

);
