import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCircleE = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7.5,9v2.5h6.5c.276,0,.5.224.5.5s-.224.5-.5.5h-6.5v2.5c0,1.103.897,2,2,2h6.5c.276,0,.5.224.5.5s-.224.5-.5.5h-6.5c-1.654,0-3-1.346-3-3v-6c0-1.654,1.346-3,3-3h6.5c.276,0,.5.224.5.5s-.224.5-.5.5h-6.5c-1.103,0-2,.897-2,2Zm16.5,3c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Z"/></svg>

);
