import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Duplicate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M22,4.145,17.986,0H10A3,3,0,0,0,7,3V4H5A3,3,0,0,0,2,7V24H18V19h4ZM16,22H4V7A1,1,0,0,1,5,6H7V19h9ZM9,17V3a1,1,0,0,1,1-1h6V6h4V17Z"/></g></svg>

);
