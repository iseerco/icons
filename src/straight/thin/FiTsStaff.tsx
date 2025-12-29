import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsStaff = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m.767,23.94l-.707-.707,12.364-12.364c.885-.884,1.463-2.055,1.628-3.294l.663-4.971c.197-1.484,1.476-2.604,2.974-2.604h3.312c1.654,0,3,1.346,3,3v2c0,1.654-1.346,3-3,3h-2.5v-1h2.5c1.103,0,2-.897,2-2v-2c0-1.103-.897-2-2-2h-3.312c-.998,0-1.851.746-1.981,1.735l-.663,4.971c-.194,1.457-.874,2.831-1.913,3.87L.767,23.94Z"/>
</svg>

);
