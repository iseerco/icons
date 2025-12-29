import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMoveToFolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,3H12.35L8.35,1H3.5C1.57,1,0,2.57,0,4.5V23H24V6.5c0-1.93-1.57-3.5-3.5-3.5ZM3,20V8H21v12H3Zm13.71-6.21c.39,.39,.39,1.02,0,1.41l-3.71,3.79v-3H7v-3h6v-3l3.71,3.79Z"/></svg>

);
