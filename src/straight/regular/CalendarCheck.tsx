import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2h-3V0h-2V2H8V0h-2V2H3C1.346,2,0,3.346,0,5V24H24V5c0-1.654-1.346-3-3-3Zm1,20H2V10H22v12Zm0-14H2v-3c0-.551,.448-1,1-1H21c.552,0,1,.449,1,1v3Zm-12.914,11.414l-2.782-2.696,1.393-1.437,2.793,2.707,5.809-5.701,1.404,1.425-5.793,5.707c-.387,.387-.896,.58-1.407,.58s-1.025-.195-1.416-.585Z"/></svg>

);
