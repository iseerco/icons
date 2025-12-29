import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPenSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9.991,15.491l2.121,2.121-6.388,6.388H0v-5.725l6.491-6.49,2.121,2.121-5.612,5.611v1.482h1.482l5.509-5.509Zm14.007,6.386l-2.121,2.121L.002,2.123,2.123.002l8.075,8.075,6.892-6.892c.764-.765,1.78-1.186,2.862-1.186s2.098.421,2.862,1.186c1.578,1.578,1.578,4.146,0,5.725l-6.892,6.892,8.075,8.075Zm-10.196-10.196l3.347-3.347-1.482-1.482-3.347,3.347,1.482,1.482Z"/>
</svg>

);
