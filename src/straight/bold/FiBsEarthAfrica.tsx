import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsEarthAfrica = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.963,0-9-4.038-9-9,0-3.224,1.705-6.058,4.26-7.647l.74.647v2h2l2.5-1.5,1.5,1.5v2h-4l-3,2v2c0,1.105.895,2,2,2h2l1,4h2l3-5v-2.5l-1.5-1.5h2.257c.796,0,1.559-.316,2.121-.879l.473-.473c.418,1.037.648,2.168.648,3.352,0,4.962-4.037,9-9,9Z"/></svg>

);
