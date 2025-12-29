import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWaterLadder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,21v3c-1.157,0-2.202-.451-3-1.17-.798.72-1.843,1.17-3,1.17s-2.202-.451-3-1.17c-.798.72-1.843,1.17-3,1.17s-2.202-.451-3-1.17c-.798.72-1.843,1.17-3,1.17s-2.202-.451-3-1.17c-.798.72-1.843,1.17-3,1.17v-3c.651,0,1.201-.419,1.408-1h3.184c.207.581.757,1,1.408,1s1.201-.419,1.408-1h3.184c.207.581.757,1,1.408,1s1.201-.419,1.408-1h3.184c.207.581.757,1,1.408,1s1.201-.419,1.408-1h3.184c.207.581.757,1,1.408,1Zm-17-3h-3V4.5C4,2.019,6.019,0,8.5,0h1.5v3h-1.5c-.827,0-1.5.673-1.5,1.5v1.5h10v-1.5c0-2.481,2.019-4.5,4.5-4.5h1.5v3h-1.5c-.827,0-1.5.673-1.5,1.5v13.5h-3v-3H7v3Zm0-9v3h10v-3H7Z"/></svg>

);
