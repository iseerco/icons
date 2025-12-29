import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Frown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm5,16c0-2-2-5-4.993-5A5.409,5.409,0,0,0,6.95,18ZM6,10v1h4V10a2,2,0,0,0-4,0Zm8,0v1h4V10a2,2,0,0,0-4,0Z"/></svg>

);
