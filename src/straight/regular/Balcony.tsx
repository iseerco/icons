import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Balcony = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M20,10V3c0-1.654-1.346-3-3-3H7c-1.654,0-3,1.346-3,3v7H0v11c0,1.654,1.346,3,3,3H21c1.654,0,3-1.346,3-3V10h-4Zm-11.5,2v10h-2.5V12h2.5Zm2,0h3v10h-3V12Zm5,0h2.5v10h-2.5V12ZM6,3c0-.552,.448-1,1-1h10c.552,0,1,.448,1,1v7H6V3ZM2,21V12h2v10h-1c-.552,0-1-.448-1-1Zm20,0c0,.552-.448,1-1,1h-1V12h2v9Z"/>
</svg>

);
