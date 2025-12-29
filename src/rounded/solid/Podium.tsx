import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Podium = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,10H4v-3c0-1.654,1.346-3,3-3h.184c.414,1.161,1.514,2,2.816,2h3c3.957-.104,3.954-5.897,0-6h-3c-1.302,0-2.402,.839-2.816,2h-.184c-2.757,0-5,2.243-5,5v3H1c-1.308,.006-1.307,1.994,0,2h1.153l1.304,7.821c.403,2.422,2.478,4.179,4.932,4.179h7.223c2.455,0,4.529-1.757,4.932-4.179l1.304-7.821h1.153c1.308-.006,1.307-1.994,0-2Z"/></svg>

);
