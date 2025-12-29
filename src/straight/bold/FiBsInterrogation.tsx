import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsInterrogation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,3a9,9,0,1,0,9,9A9.01,9.01,0,0,0,12,3Z"/><path d="M10.5,14.154a4.319,4.319,0,0,1,2.155-3.821,1.364,1.364,0,1,0-2.018-1.2h-3a4.364,4.364,0,0,1,5.141-4.295A4.364,4.364,0,0,1,14.1,12.96a1.347,1.347,0,0,0-.6,1.194Z"/><rect x="10.565" y="15.994" width="3" height="3"/></svg>

);
