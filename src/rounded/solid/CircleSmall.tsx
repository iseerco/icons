import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleSmall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,4.5A7.5,7.5,0,1,0,19.5,12,7.508,7.508,0,0,0,12,4.5Zm0,12A4.5,4.5,0,1,1,16.5,12,4.505,4.505,0,0,1,12,16.5Z"/></svg>

);
