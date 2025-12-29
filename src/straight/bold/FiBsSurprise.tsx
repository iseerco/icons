import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSurprise = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.894,24,0A12.013,12.013,0,0,0,12,0Zm0,21a9.01,9.01,0,0,1-9-9C3.452.077,20.55.08,21,12A9.01,9.01,0,0,1,12,21Zm3-5a3,3,0,0,1-6,0A3,3,0,0,1,15,16ZM8,12A2,2,0,0,1,8,8,2,2,0,0,1,8,12Zm10-2a2,2,0,0,1-4,0A2,2,0,0,1,18,10Z"/></svg>

);
