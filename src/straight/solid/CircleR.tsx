import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleR = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm5,18h-2.303l-2.393-4h-2.804v4h-2v-9.5c0-1.379,1.121-2.5,2.5-2.5h3.5c2.206,0,4,1.794,4,4,0,1.845-1.255,3.401-2.956,3.862l2.456,4.138Zm-3.5-6h-4v-3.5c0-.275.225-.5.5-.5h3.5c1.103,0,2,.897,2,2s-.897,2-2,2Z"/></svg>

);
