import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Laptop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M22,15V3H2V15H0v3a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V15ZM4,5H20V15H14.921l-.847,1H9.925l-.846-1H4ZM22,18a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V17H8.151L9,18h6l.847-1H22Z"/></g></svg>

);
