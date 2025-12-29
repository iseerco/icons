import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Utensils = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,10a12.64,12.64,0,0,1-5,9.775V23a1,1,0,0,1-2,0V2A1.9,1.9,0,0,1,16.131.217a2.194,2.194,0,0,1,2.356.459A13.474,13.474,0,0,1,22,10ZM11,0a1,1,0,0,0-1,1V7A3,3,0,0,1,8,9.816V1A1,1,0,0,0,6,1V9.816A3,3,0,0,1,4,7V1A1,1,0,0,0,2,1V7a5.009,5.009,0,0,0,4,4.9V23a1,1,0,0,0,2,0V11.9A5.009,5.009,0,0,0,12,7V1A1,1,0,0,0,11,0Z"/></svg>

);
