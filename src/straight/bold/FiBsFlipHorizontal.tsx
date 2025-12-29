import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFlipHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.625,19.759,14.93.628,14.626,0H13V24h7.894a3,3,0,0,0,2.731-4.241Z"/><path d="M11,3.993V0H9.516L.8,19.175A3.412,3.412,0,0,0,3.907,24H11V21H3.907a.414.414,0,0,1-.377-.583Z"/></svg>

);
