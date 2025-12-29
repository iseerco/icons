import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessKnight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,22V10c0-.091-.109-9.093-9.572-9.987a2.838,2.838,0,0,0-2.881,1.8c-.992,2.47-2.886,3.583-5.424,4.5A3.235,3.235,0,0,0,2,9.355,2.649,2.649,0,0,0,4.645,12H9.82c-1.249,5.952-6.061,9.328-7.106,10H2a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2Z"/></svg>

);
