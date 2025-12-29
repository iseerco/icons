import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MehBlank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,9.5a1.5,1.5,0,0,1-3,0A1.5,1.5,0,0,1,10,9.5ZM15.5,8a1.5,1.5,0,0,0,0,3A1.5,1.5,0,0,0,15.5,8ZM24,12A12.013,12.013,0,0,1,12,24C-3.9,23.4-3.894.6,12,0A12.013,12.013,0,0,1,24,12Zm-2,0A10.011,10.011,0,0,0,12,2c-13.248.5-13.244,19.5,0,20A10.011,10.011,0,0,0,22,12Z"/></svg>

);
