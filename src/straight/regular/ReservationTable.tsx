import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ReservationTable = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m7.456,22h16.515l-3.075-17.424c-.263-1.493-1.554-2.576-3.07-2.576H6.148c-1.516,0-2.807,1.083-3.07,2.576L.003,22h5.198l-.333-2h-2.481l2.358-13.361,2.711,15.361ZM17.826,4c.543,0,1.006.388,1.101.923l2.661,15.077h-12.453L6.31,4h11.516Zm-8.249,7h8.391l.353,2h-8.391l-.353-2Zm-.353-2l-.353-2h8.391l.353,2h-8.391Zm1.059,6h8.391l.353,2h-8.391l-.353-2Z"/>
</svg>

);
