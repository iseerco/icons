import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MehBlank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,9.5A1.5,1.5,0,1,1,8.5,8,1.5,1.5,0,0,1,10,9.5ZM15.5,8A1.5,1.5,0,1,0,17,9.5,1.5,1.5,0,0,0,15.5,8ZM24,12A12,12,0,1,1,12,0,12.013,12.013,0,0,1,24,12Zm-2,0A10,10,0,1,0,12,22,10.011,10.011,0,0,0,22,12Z"/></svg>

);
