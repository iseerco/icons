import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const At = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0a12,12,0,1,0,7.092,21.681l-1.184-1.612A10,10,0,1,1,22,12v2a2,2,0,0,1-4,0V12a6.021,6.021,0,1,0-1.48,3.933A3.986,3.986,0,0,0,24,14V12A12.013,12.013,0,0,0,12,0Zm0,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z"/></svg>

);
