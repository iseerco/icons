import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const OrderFoodTelephone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 6.999h-3c-1.105 0-2-.895-2-2h2l1.5 1 1.5-1h2c0 1.105-.895 2-2 2zm-5-3c0-1.105.895-2 2-2h3c1.105 0 2 .895 2 2zm6.999-3.999h-7c-1.1 0-2 .9-1.999 2l.002 7.911c0 .858.949 1.378 1.672.915l2.826-1.827h6.5v-6.999c0-1.105-.896-2-2.001-2zm-4.386 12.848 6.265 6.266-3.171 3.171c-1.105 1.106-2.6 1.716-4.207 1.716-7.248-.001-16.5-9.253-16.5-16.501 0-1.608.609-3.103 1.716-4.208l3.171-3.17 6.265 6.265-4.125 4.125c1.373 3.061 3.493 5.186 6.453 6.468z"/></svg>
);
