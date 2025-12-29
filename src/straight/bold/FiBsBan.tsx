import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,3a8.947,8.947,0,0,1,5.207,1.672L4.672,17.206A8.986,8.986,0,0,1,12,3Zm0,18a8.942,8.942,0,0,1-5.206-1.672L19.328,6.793A8.986,8.986,0,0,1,12,21Z"/></svg>

);
