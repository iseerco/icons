import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WatchCalculator = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17,22c.342,0,.677-.035,1-.101v2.101H6v-2.101c.323.066.658.101,1,.101h10Zm0-20c.342,0,.677.035,1,.101V0H6v2.101c.323-.066.658-.101,1-.101h10Zm0,2H7c-1.654,0-3,1.346-3,3v10c0,1.654,1.346,3,3,3h10c1.654,0,3-1.346,3-3V7c0-1.654-1.346-3-3-3Zm-7,13h-2v-2h2v2Zm0-4h-2v-2h2v2Zm3,4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm3,4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-8v-2h8v2Z"/></svg>

);
