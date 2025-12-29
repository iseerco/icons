import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Gamepad = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<path d="M20.4,3H3.6L3.3,3.3C1.2,5.7,0,8.8,0,12c0,5.5,2.2,10,5,10c2.2,0,3.3-3.2,3.8-5h6.4c0.5,1.8,1.6,5,3.8,5c2.8,0,5-4.5,5-10  c0-3.2-1.2-6.3-3.3-8.7L20.4,3z M19,20c-0.6,0-1.6-2.1-2-4.2L16.8,15H7.2L7,15.8C6.6,17.9,5.6,20,5,20c-1,0-3-3.1-3-8  c0-2.5,0.9-5,2.5-7h15.1c1.6,2,2.4,4.5,2.4,7C22,16.9,20,20,19,20z"/>
<polygon points="8,7 6,7 6,9 4,9 4,11 6,11 6,13 8,13 8,11 10,11 10,9 8,9 "/>
<circle cx="18.5" cy="8.5" r="1.5"/>
<circle cx="15.5" cy="11.5" r="1.5"/>
</svg>

);
