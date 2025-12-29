import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChalkboardUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14,19v5H0v-5c0-1.654,1.346-3,3-3h8c1.654,0,3,1.346,3,3Zm-7-5c2.206,0,4-1.794,4-4s-1.794-4-4-4-4,1.794-4,4,1.794,4,4,4ZM24,3v15h-8.101c-.436-2.139-2.249-3.763-4.466-3.956.974-1.067,1.567-2.486,1.567-4.044,0-3.314-2.686-6-6-6-.701,0-1.374.121-2,.342v-1.342c0-1.654,1.346-3,3-3h13c1.654,0,3,1.346,3,3Zm-2,11h-5v2h5v-2Z"/></svg>

);
