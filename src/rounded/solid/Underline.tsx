import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Underline = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,20a8.009,8.009,0,0,0,8-8V1a1,1,0,0,0-2,0V12A6,6,0,0,1,6,12V1A1,1,0,0,0,4,1V12A8.009,8.009,0,0,0,12,20Z"/><path d="M23,22H1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/></svg>

);
