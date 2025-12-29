import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0a12,12,0,1,0,7.092,21.681l-1.775-2.419A9,9,0,1,1,21,12v1.5a1.5,1.5,0,0,1-3,0V12a6.023,6.023,0,1,0-1.922,4.388A4.48,4.48,0,0,0,24,13.5V12A12.013,12.013,0,0,0,12,0Zm0,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"/></svg>

);
