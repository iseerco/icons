import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Unlock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M7,8V7a5,5,0,0,1,9.375-2.422l1.749-.971A7,7,0,0,0,5,7V8H2V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8ZM20,21a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10H20Z"/><rect x="11" y="14" width="2" height="4"/></g></svg>

);
