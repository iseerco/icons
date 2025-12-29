import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Picture = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M21,0H3A3,3,0,0,0,0,3V24H24V3A3,3,0,0,0,21,0ZM3,2H21a1,1,0,0,1,1,1V20.586L11.121,9.707a3,3,0,0,0-4.242,0L2,14.586V3A1,1,0,0,1,3,2ZM2,17.414l6.293-6.293a1,1,0,0,1,1.414,0L20.586,22H2Z"/><path d="M16,10a3,3,0,1,0-3-3A3,3,0,0,0,16,10Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,16,6Z"/></g></svg>

);
