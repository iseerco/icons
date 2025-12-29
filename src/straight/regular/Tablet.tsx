import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tablet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M2,0V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V0ZM20,2V17H4V2ZM19,22H5a1,1,0,0,1-1-1V19h7v2h2V19h7v2A1,1,0,0,1,19,22Z"/></g></svg>

);
