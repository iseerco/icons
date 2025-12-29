import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Gamepad = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<path d="M20.7,3.3L20.4,3H3.6L3.3,3.3C1.2,5.7,0,8.8,0,12c0,5.5,2.2,10,5,10c2.2,0,3.3-3.2,3.8-5h6.4c0.5,1.8,1.6,5,3.8,5  c2.8,0,5-4.5,5-10C24,8.8,22.8,5.7,20.7,3.3z M9,11H7v2H5v-2H3V9h2V7h2v2h2V11z M15.5,13c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5  s1.5,0.7,1.5,1.5S16.3,13,15.5,13z M18.5,10C17.7,10,17,9.3,17,8.5S17.7,7,18.5,7S20,7.7,20,8.5S19.3,10,18.5,10z"/>
</svg>

);
