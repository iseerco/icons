import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCaravan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,20.5A3.5,3.5,0,1,1,7.5,17,3.5,3.5,0,0,1,11,20.5ZM10,7H5v4h5ZM22,17V3.5A3.5,3.5,0,0,0,18.5,0H3.5A3.5,3.5,0,0,0,0,3.5V19.885H2a5.454,5.454,0,0,1,1-2.673V3.5A.5.5,0,0,1,3.5,3h15a.5.5,0,0,1,.5.5V17H17V7H12V17.363A5.457,5.457,0,0,1,12.975,20H24V17Z"/></svg>

);
