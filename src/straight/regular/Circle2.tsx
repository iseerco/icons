import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Circle2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm4,14h-5.457c.376-.335,.936-.669,1.634-1.072,1.703-.983,3.823-2.207,3.823-4.928,0-2.206-1.794-4-4-4s-4,1.794-4,4h2c0-1.103,.897-2,2-2s2,.897,2,2c0,1.461-1.066,2.182-2.823,3.196-1.489,.859-3.177,1.834-3.177,3.804v1h8v-2Z"/></svg>

);
