import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Camera = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M21,4H18.492L15.406,0H8.593L5.508,4H3A3,3,0,0,0,0,7V24H24V7A3,3,0,0,0,21,4ZM9.577,2h4.847l1.542,2H8.034ZM22,22H2V7A1,1,0,0,1,3,6H21a1,1,0,0,1,1,1Z"/><path d="M12,8a6,6,0,1,0,6,6A6.006,6.006,0,0,0,12,8Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,18Z"/></g></svg>

);
