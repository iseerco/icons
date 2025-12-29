import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Frown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0ZM6,10a2,2,0,0,1,4,0c0,1-.895,1-2,1S6,11,6,10Zm10.01,8H8a1,1,0,0,1-.963-1.285A5.5,5.5,0,0,1,12.007,13a5.469,5.469,0,0,1,4.966,3.715A1.02,1.02,0,0,1,16.01,18ZM16,11c-1.105,0-2,0-2-1a2,2,0,0,1,4,0C18,11,17.105,11,16,11Z"/></svg>

);
