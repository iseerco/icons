import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EarthAfrica = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10,0-3.474,1.781-6.539,4.477-8.332l1.523,1.332v2h2l2.5-1.5,1.5,1.5v2h-4l-3,2v2c0,1.105.895,2,2,2h2l1,4h2l3-5v-2.5l-1.5-1.5h2.257c.796,0,1.559-.316,2.121-.879l1.235-1.235c.569,1.255.886,2.648.886,4.114,0,5.514-4.486,10-10,10Z"/></svg>

);
