import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRulerHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,7H2.5c-1.379,0-2.5,1.121-2.5,2.5v7.5H24v-7.5c0-1.379-1.121-2.5-2.5-2.5Zm1.5,9h-3v-4h-1v4h-4v-4h-1v4h-4v-4h-1v4H5v-4h-1v4H1v-6.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5v6.5Z"/></svg>

);
