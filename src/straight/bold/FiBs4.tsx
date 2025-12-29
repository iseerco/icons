import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBs4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,0V12H7.5c-.275,0-.5-.224-.5-.5V0h-3V11.5c0,1.93,1.57,3.5,3.5,3.5h9.5v9h3V0h-3Z"/></svg>

);
