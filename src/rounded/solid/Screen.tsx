import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Screen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,3H5A5.006,5.006,0,0,0,0,8v6a5.006,5.006,0,0,0,5,5h6v1H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2H13V19h6a5.006,5.006,0,0,0,5-5V8A5.006,5.006,0,0,0,19,3Z"/></svg>

);
