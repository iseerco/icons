import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Camping = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5.005,24H19a5,5,0,0,0,4.522-7.132L16.535,2.9a5,5,0,0,0-9.057-.026l-7,14L.47,16.9A5,5,0,0,0,5.005,24Zm3.4-2,2.717-5.438A.958.958,0,0,1,12,16a.973.973,0,0,1,.893.588L15.6,22ZM2.278,17.748l7-14.012a3,3,0,0,1,5.454.027l6.988,13.973A3,3,0,0,1,19,22H17.836L14.7,15.72a2.971,2.971,0,0,0-5.377-.027L6.168,22H5.005a3,3,0,0,1-2.727-4.252Z"/></svg>

);
