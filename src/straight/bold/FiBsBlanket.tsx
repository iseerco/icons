import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBlanket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m6.5,14h17.5V0H6.5C2.916,0,0,2.916,0,6.5v11c0,3.584,2.916,6.5,6.5,6.5h13.5c2.206,0,4-1.794,4-4s-1.794-4-4-4H6v3h14c.551,0,1,.448,1,1s-.449,1-1,1H6.5c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5Zm-3.5-7.5c0-1.93,1.57-3.5,3.5-3.5h14.5v8H6.5c-1.288,0-2.489.376-3.5,1.024v-5.524Z"/>
</svg>

);
