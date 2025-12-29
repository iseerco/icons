import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sad = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0ZM6,10a2,2,0,0,1,4,0v1H6Zm10.336,7.748A7.508,7.508,0,0,0,12,16a7.508,7.508,0,0,0-4.336,1.748l-1.33-1.494A9.454,9.454,0,0,1,12,14a9.454,9.454,0,0,1,5.666,2.254ZM14,11V10a2,2,0,0,1,4,0v1Z"/></svg>

);
