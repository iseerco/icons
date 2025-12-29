import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGolfHole = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M13.5,18h-3V2.005C10.5,.001,12.252-.26,13.125,.177l7.875,5.823-7.5,3.929v8.071Zm2.5-7.524v3.083c3.017,.723,5,2.187,5,3.541,0,1.888-3.849,4-9,4s-9-2.112-9-4c0-1.353,1.983-2.817,5-3.541v-3.083C3.248,11.396,0,13.936,0,17.1c0,3.991,5.159,7,12,7s12-3.009,12-7c0-3.164-3.248-5.704-8-6.624Z"/>
</svg>

);
