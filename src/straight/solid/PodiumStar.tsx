import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PodiumStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,10v-3c0-1.654,1.346-3,3-3h.184c.414,1.161,1.514,2,2.816,2h3c1.654,0,3-1.346,3-3s-1.346-3-3-3h-3c-1.302,0-2.402,.839-2.816,2h-.184c-2.757,0-5,2.243-5,5v3H0v2H2.153l2,12h15.694l2-12h2.153v-2H4Zm11.999,6.611l-2.197,1.273,.884,2.686-.504,.349-2.173-1.68-2.183,1.687-.48-.362,.869-2.717-2.212-1.231v-.615h2.899l.784-3h.648l.784,3h2.883v.611Z"/></svg>

);
