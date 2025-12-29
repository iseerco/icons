import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCircle5 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-21C7.037,3,3,7.037,3,12s4.037,9,9,9,9-4.037,9-9S16.963,3,12,3Zm5,11c0-2.206-1.794-4-4-4h-2v-2h5v-3H8V13h5c.552,0,1,.448,1,1s-.448,1-1,1h-5v3h5c2.206,0,4-1.794,4-4Z"/></svg>

);
