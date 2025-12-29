import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M16.659,17.788,13.026,21.42,13,0,11,0l.026,21.407-3.62-3.62L5.992,19.2l3.919,3.919a3,3,0,0,0,4.243,0L18.073,19.2Z"/></g></svg>

);
