import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WatchFitness = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17,4H7c-1.654,0-3,1.346-3,3v10c0,1.654,1.346,3,3,3h10c1.654,0,3-1.346,3-3V7c0-1.654-1.346-3-3-3Zm-5,12.2s-4-2.778-4-5.04c0-1.193.895-2.16,2-2.16s2,.807,2,2c0-1.193.895-2,2-2s2,.967,2,2.16c0,2.262-4,5.04-4,5.04ZM6,2.101V0h12v2.101c-.323-.066-.658-.101-1-.101H7c-.342,0-.677.035-1,.101Zm1,19.899h10c.342,0,.677-.035,1-.101v2.101H6v-2.101c.323.066.658.101,1,.101Z"/></svg>

);
