import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPlane = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,9H18.134L14.309,1.823A3.5,3.5,0,0,0,11.236,0h-4.8L9.181,9H7.017L4.892,7.285a2.9,2.9,0,0,0-4.5.661A2.848,2.848,0,0,0,.355,10.79L3.575,17H9.187l-3,7h5.049a3.5,3.5,0,0,0,3.018-1.727L18.1,17H24V12.5A3.5,3.5,0,0,0,20.5,9ZM10.487,3h.749a.5.5,0,0,1,.432.247L14.734,9H12.317ZM21,14H16.569l-4.79,6.575-.1.164a.5.5,0,0,1-.439.261h-.5l3-7H5.391L3.13,9.719,5.957,12H20.5a.5.5,0,0,1,.5.5Z"/></svg>

);
