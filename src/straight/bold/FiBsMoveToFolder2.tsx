import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMoveToFolder2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,6.5v9.73l-3-3.07v-5.16H3v12H12v3H0V4.5C0,2.57,1.57,1,3.5,1h4.85l4,2h8.15c1.93,0,3.5,1.57,3.5,3.5Zm-4,8.5v3h-6v3h6v3l3.71-3.79c.39-.39,.39-1.02,0-1.41l-3.71-3.79Z"/></svg>

);
