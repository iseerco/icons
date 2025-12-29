import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrMug = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,6h-2V2h.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h.5V18.5c0,2.481,2.019,4.5,4.5,4.5H14.5c2.481,0,4.5-2.019,4.5-4.5v-2.5h2c1.654,0,3-1.346,3-3v-4c0-1.654-1.346-3-3-3Zm-3,12.5c0,1.93-1.57,3.5-3.5,3.5H5.5c-1.93,0-3.5-1.57-3.5-3.5V7H14.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H2V2H18V18.5Zm5-5.5c0,1.103-.897,2-2,2h-2V7h2c1.103,0,2,.897,2,2v4Z"/></svg>

);
