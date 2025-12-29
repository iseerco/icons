import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RouteInterstate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,8.005V.862l1.379,.564c.974,.398,2.164,.597,3.403,.584,1.844-.033,3.469-.562,4.575-1.489L12-.018l.643,.539c1.106,.927,2.731,1.457,4.575,1.489,1.244,.022,2.43-.186,3.403-.584l1.379-.564v7.143H2Zm0,2v1.969c0,6.565,7.006,10.577,9.151,11.649l.806,.403,.836-.336c2.16-.869,9.207-4.283,9.207-11.717v-1.969H2Z"/></svg>

);
