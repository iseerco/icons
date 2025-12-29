import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,9V19a5.006,5.006,0,0,1-5,5H7a5.006,5.006,0,0,1-5-5V9A1,1,0,0,1,3,8H21A1,1,0,0,1,22,9Zm1-5H13V2h2a1,1,0,0,0,0-2H9A1,1,0,0,0,9,2h2V4H1A1,1,0,0,0,1,6H23A1,1,0,0,0,23,4Z"/></svg>

);
