import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const P = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,24c-.552,0-1-.447-1-1V5C2,2.243,4.243,0,7,0h7.5c9.929,.353,9.922,14.65,0,15H4v8c0,.553-.448,1-1,1Zm1-11H14.5c7.27-.232,7.265-10.77,0-11H7c-1.654,0-3,1.346-3,3V13Z"/></svg>

);
