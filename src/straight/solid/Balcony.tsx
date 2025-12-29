import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Balcony = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M20,10V3c0-1.654-1.346-3-3-3H7c-1.654,0-3,1.346-3,3v7H0v11c0,1.654,1.846,3,3,3H21c2.154,0,3-1.346,3-3V10h-4ZM4,22h-1c-.552,0-1-.448-1-1V12h2v10Zm4.5,0h-2V12h2v10Zm4.5,0h-2V12h2v10Zm4.5,0h-2V12h2v10Zm3.5,0h-1V12h2v9c0,.552-.448,1-1,1Z"/>
</svg>

);
