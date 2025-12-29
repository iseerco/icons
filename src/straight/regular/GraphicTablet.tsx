import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GraphicTablet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M21,4H2v7H0v2H2v7H21a3,3,0,0,0,3-3V7A3,3,0,0,0,21,4ZM4,13H5V11H4V6H7V18H4Zm18,4a1,1,0,0,1-1,1H9V6H21a1,1,0,0,1,1,1Z"/></g></svg>

);
