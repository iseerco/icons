import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ParkingCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm1.5-17h-3.5c-1.654,0-3,1.346-3,3v11h2v-5h4.5c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5Zm0,7h-4.5v-4c0-.551,.448-1,1-1h3.5c1.379,0,2.5,1.122,2.5,2.5s-1.121,2.5-2.5,2.5Z"/></svg>

);
