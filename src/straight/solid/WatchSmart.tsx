import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WatchSmart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17,22c.342,0,.677-.035,1-.101v2.101H6v-2.101c.323.066.658.101,1,.101h10Zm0-20c.342,0,.677.035,1,.101V0H6v2.101c.323-.066.658-.101,1-.101h10Zm3,5v10c0,1.654-1.346,3-3,3H7c-1.654,0-3-1.346-3-3V7c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3Zm-4.293,7.293l-2.707-2.707v-4.586h-2v5.414l3.293,3.293,1.414-1.414Z"/></svg>

);
