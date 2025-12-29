import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileChartPie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,7V.46c.913,.346,1.753,.879,2.465,1.59l3.484,3.486c.712,.711,1.245,1.551,1.591,2.464h-6.54c-.552,0-1-.449-1-1Zm-.773,8.474c-.581,.249-1.227-.177-1.227-.809v-1.665c-3.956,.104-3.955,5.897,0,6,2.108,.047,3.625-2.274,2.756-4.181l-1.529,.655Zm8.773-4.989v8.515c0,2.757-2.243,5-5,5H7c-2.757,0-5-2.243-5-5V5C2,2.243,4.243,0,7,0h4.515c.163,0,.324,.013,.485,.024V7c0,1.654,1.346,3,3,3h6.976c.011,.161,.024,.322,.024,.485Zm-5,5.515c-.21-6.608-9.791-6.606-10,0,.21,6.608,9.791,6.606,10,0Z"/></svg>

);
