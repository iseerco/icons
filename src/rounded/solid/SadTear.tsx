import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SadTear = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm3.5,8a1.5,1.5,0,0,1,0,3A1.5,1.5,0,0,1,15.5,8ZM7,18c-3.236-.358-1.8-3.862-.458-5.385C7.561,11.524,9.039,15.109,9,16A2,2,0,0,1,7,18Zm1.5-7a1.5,1.5,0,0,1,0-3A1.5,1.5,0,0,1,8.5,11Zm9.246,6.666a1,1,0,0,1-1.41.081A7.519,7.519,0,0,0,12,16a1,1,0,0,1,0-2,9.454,9.454,0,0,1,5.666,2.254A1,1,0,0,1,17.746,17.666Z"/></svg>

);
