import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPennant = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4.646,3.782A2.5,2.5,0,1,0,1,4.5V24H4V20.493L24,12ZM4,6.767,16.326,12,4,17.233Z"/></svg>

);
