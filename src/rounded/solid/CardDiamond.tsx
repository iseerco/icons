import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CardDiamond = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,0h-8C5.243,0,3,2.243,3,5v14c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-1,12.714l-2.377,3.396c-.303.433-.944.433-1.247,0l-2.377-3.396c-.3-.429-.3-.999,0-1.427l2.377-3.396c.303-.433.944-.433,1.247,0l2.377,3.396c.3.429.3.999,0,1.427Z"/>
</svg>

);
