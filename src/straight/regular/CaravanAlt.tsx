import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaravanAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,19H22V3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V21H4.142a3.994,3.994,0,0,0,7.716,0H24ZM2,8H7v3H2ZM8,22a2,2,0,0,1,0-4A2,2,0,0,1,8,22Zm0-6a4,4,0,0,0-3.858,3H2V13H9V6H2V3A1,1,0,0,1,3,2H19a1,1,0,0,1,1,1V19H11.858A4,4,0,0,0,8,16ZM18,6H11v7h7Zm-2,5H13V8h3Z"/></svg>

);
