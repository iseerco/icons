import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTruckContainer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.615,10.6l-.842-2.525A4.494,4.494,0,0,0,18.5,5h-2A1.5,1.5,0,0,0,15,6.5V17H1.5A1.5,1.5,0,0,0,0,18.513H0v2.064a2.5,2.5,0,0,0,5,0V20H6v.577a2.5,2.5,0,0,0,5,0V20h6v.577a2.5,2.5,0,0,0,5,0v-.915A3.506,3.506,0,0,0,24,16.5V12.974A7.487,7.487,0,0,0,23.615,10.6ZM18.5,8a1.5,1.5,0,0,1,1.424,1.026l.842,2.525A4.483,4.483,0,0,1,21,12.974V13H18V8Zm-17,7h10A1.5,1.5,0,0,0,13,13.5v-8A4.505,4.505,0,0,0,8.5,1h-4A4.505,4.505,0,0,0,0,5.5v8A1.5,1.5,0,0,0,1.5,15ZM3,5.5A1.5,1.5,0,0,1,4.5,4h4A1.5,1.5,0,0,1,10,5.5V12H8V7.5a1.5,1.5,0,0,0-3,0V12H3Z"/></svg>

);
