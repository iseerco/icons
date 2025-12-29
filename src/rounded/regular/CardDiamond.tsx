import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CardDiamond = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15,11.286c.3.429.3.999,0,1.427l-2.377,3.396c-.303.433-.944.433-1.247,0l-2.377-3.396c-.3-.429-.3-.999,0-1.427l2.377-3.396c.303-.433.944-.433,1.247,0l2.377,3.396Zm6-6.286v14c0,2.757-2.243,5-5,5h-8c-2.757,0-5-2.243-5-5V5C3,2.243,5.243,0,8,0h8c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3h-8c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h8c1.654,0,3-1.346,3-3V5Z"/>
</svg>

);
