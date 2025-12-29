import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Music = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,1H11A3,3,0,0,0,8,4V14a5,5,0,1,0,2,4V4a1,1,0,0,1,1-1H21a1,1,0,0,1,1,1V14a5,5,0,1,0,2,4V4A3,3,0,0,0,21,1Z"/></svg>

);
