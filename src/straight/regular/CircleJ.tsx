import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleJ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm2.75-16h2v9.5c0,1.379-1.121,2.5-2.5,2.5h-5c-1.379,0-2.5-1.121-2.5-2.5v-1.5h2v1.5c0,.275.225.5.5.5h5c.275,0,.5-.225.5-.5V6Z"/></svg>

);
