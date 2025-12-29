import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAngleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,16.019,9.52,6.513a3.507,3.507,0,0,1,4.948,0L24,16.031l-2.121,2.117L12.348,8.63a.5.5,0,0,0-.707,0l-9.52,9.507Z"/></svg>

);
