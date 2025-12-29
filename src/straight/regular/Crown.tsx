import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Crown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M21,21.707H3a3,3,0,0,1-3-3V2.293l6,6,6-6,6,6,6-6V18.707A3,3,0,0,1,21,21.707ZM2,7.121V18.707a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V7.121l-4,4-6-6-6,6Z"/></g></svg>

);
