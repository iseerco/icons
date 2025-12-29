import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GrinSquint = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm1.445,8.168,3-2a1,1,0,0,1,1.11,1.664L15.8,9l1.752,1.168a1,1,0,1,1-1.11,1.664l-3-2A1.007,1.007,0,0,1,13.445,8.168Zm-7-.336a1,1,0,1,1,1.11-1.664l3,2a1.007,1.007,0,0,1,0,1.664l-3,2a1,1,0,0,1-1.11-1.664L8.2,9Zm11.4,7.71A6.827,6.827,0,0,1,12,19a6.836,6.836,0,0,1-5.848-3.458A1,1,0,0,1,7.2,14.024,15.4,15.4,0,0,0,12,15a15.4,15.4,0,0,0,4.792-.976A1,1,0,0,1,17.842,15.542Z"/></svg>

);
