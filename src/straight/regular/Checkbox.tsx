import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Checkbox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M24,24H0V3A3,3,0,0,1,3,0H21a3,3,0,0,1,3,3ZM2,22H22V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3Z"/><path d="M9.333,17.919a1.985,1.985,0,0,1-1.414-.586L3.293,12.707l1.414-1.414,4.626,4.626,9.96-9.959,1.414,1.414-9.959,9.959A1.987,1.987,0,0,1,9.333,17.919Z"/></g></svg>

);
