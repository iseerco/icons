import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSignHanging = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,1V0H2.5C1.122,0,0,1.122,0,2.5V24H1V2.5c0-.827,.673-1.5,1.5-1.5H7v3h-.5c-1.378,0-2.5,1.122-2.5,2.5v13.5H24V6.5c0-1.378-1.122-2.5-2.5-2.5h-.5V1h3Zm-1,5.5v12.5H5V6.5c0-.827,.673-1.5,1.5-1.5h15c.827,0,1.5,.673,1.5,1.5Zm-3-2.5H8V1h12v3Z"/></svg>

);
