import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Registered = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.998,11h-3.998v-3c0-.552,.449-1,1-1h3c1.103,0,2,.897,2,2s-.894,1.997-1.995,2h-.007Zm11.002,1c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-7.143,4.485l-2.285-3.808c1.426-.612,2.427-2.03,2.427-3.678,0-2.206-1.794-4-4-4h-3c-1.654,0-3,1.346-3,3v9c0,.553,.448,1,1,1s1-.447,1-1v-4h3.434l2.709,4.515c.188,.312,.519,.485,.858,.485,.175,0,.353-.046,.514-.143,.474-.284,.627-.898,.343-1.372Z"/></svg>

);
