import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPersonSeatReclined = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4,2.5c0-1.379,1.121-2.5,2.5-2.5s2.5,1.121,2.5,2.5-1.121,2.5-2.5,2.5-2.5-1.121-2.5-2.5Zm16.946,18.5l-3.5-7h-7.219c-.235,0-.441-.167-.489-.397l-.336-1.603h6.598v-3h-7.227l-.419-2h-3.065l1.513,7.218c.338,1.612,1.779,2.782,3.426,2.782h5.365l3.5,7h3.927v-3h-2.073Zm-10.801-2c-2.57,0-4.831-1.823-5.375-4.334l-1.662-7.666H.039l1.799,8.302c.842,3.881,4.335,6.698,8.307,6.698h5.71l-1.5-3h-4.21Z"/></svg>

);
