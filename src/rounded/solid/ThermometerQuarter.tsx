import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ThermometerQuarter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,12.111v-7.111c0-2.757-2.243-5-5-5s-5,2.243-5,5v7.111c-1.276,1.305-2,3.062-2,4.889,0,3.859,3.14,7,7,7s7-3.141,7-7c0-1.826-.724-3.584-2-4.889Zm-5,7.889c-1.654,0-3-1.346-3-3,0-1.302.839-2.402,2-2.816v-2.184c0-.553.448-1,1-1s1,.447,1,1v2.184c1.161.414,2,1.514,2,2.816,0,1.654-1.346,3-3,3Z"/>
</svg>

);
