import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ThermometerFull = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,12.111v-7.111c0-2.757-2.243-5-5-5s-5,2.243-5,5v7.111c-1.276,1.305-2,3.063-2,4.889,0,3.859,3.141,7,7,7s7-3.141,7-7c0-1.826-.724-3.584-2-4.889Zm-5,7.889c-1.654,0-3-1.346-3-3,0-1.304.836-2.415,2-2.828V5h2v9.172c1.164.413,2,1.524,2,2.828,0,1.654-1.346,3-3,3Z"/>
</svg>

);
