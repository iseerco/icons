import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Vpn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M13.5,10.5c0,.551-.449,1-1,1h-1v-2h1c.551,0,1,.449,1,1Zm10.5-6.319v15.639l-.804,.161c-.208,.042-5.167,1.02-11.196,1.02s-10.988-.978-11.196-1.02l-.804-.161V4.181l.804-.161c.208-.042,5.167-1.02,11.196-1.02s10.988,.978,11.196,1.02l.804,.161Zm-15.065,3.819h-1.673l-1.263,6.307-1.366-6.307h-1.634l1.381,6.469c.108,.561,.677,1.531,1.618,1.531s1.503-.928,1.628-1.575l1.308-6.425Zm6.065,2.5c0-1.381-1.119-2.5-2.5-2.5h-2.5v8h1.5v-3h1c1.381,0,2.5-1.119,2.5-2.5Zm6-2.5h-1.5v4.282l-2-4.273v-.009h-1.5v8h1.5v-4.231l2,4.231h1.5V8Z"/>
</svg>

);
