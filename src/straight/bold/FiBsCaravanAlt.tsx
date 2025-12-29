import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCaravanAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,20.5A3.5,3.5,0,1,1,7.5,17,3.5,3.5,0,0,1,11,20.5ZM5,11h6V7H5Zm8-4v4h4V7Zm9,10V3.5A3.5,3.5,0,0,0,18.5,0H3.5A3.5,3.5,0,0,0,0,3.5V19.885H2a5.454,5.454,0,0,1,1-2.673V3.5A.5.5,0,0,1,3.5,3h15a.5.5,0,0,1,.5.5V17H11.743a5.484,5.484,0,0,1,1.232,3H24V17Z"/></svg>

);
