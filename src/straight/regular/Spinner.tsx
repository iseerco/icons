import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Spinner = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M.415,12a12,12,0,0,1,23.17-4.364l-1.863.728A10,10,0,1,0,12.415,22a9.939,9.939,0,0,0,9.307-6.364l1.863.728A12,12,0,0,1,.415,12Z"/></g></svg>

);
