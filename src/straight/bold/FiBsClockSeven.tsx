import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsClockSeven = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-21C7.038,3,3,7.038,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Zm2,9.408V6h-3v5.592l-2.146,3.647,2.586,1.521,2.56-4.353Z"/></svg>

);
