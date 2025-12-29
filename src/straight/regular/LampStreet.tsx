import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LampStreet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,15.5c0-4.378-3.329-7.994-7.588-8.451C15.829,3.067,12.391,0,8.25,0,3.701,0,0,3.701,0,8.252l.038,15.75,2-.004-.038-15.748c0-3.446,2.804-6.25,6.25-6.25,3.044,0,5.586,2.187,6.138,5.073-4.163.546-7.388,4.117-7.388,8.427v1.5h6v.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-.5h6v-1.5Zm-14.981-.5c.257-3.352,3.065-6,6.481-6s6.225,2.648,6.481,6h-12.963Z"/>
</svg>

);
