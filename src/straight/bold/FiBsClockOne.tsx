import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsClockOne = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-21C7.037,3,3,7.038,3,12s4.037,9,9,9,9-4.038,9-9S16.963,3,12,3Zm4.011,7.145l-2.252-1.981-.759,.862v-3.025h-3v10.975l6.011-6.831Z"/></svg>

);
