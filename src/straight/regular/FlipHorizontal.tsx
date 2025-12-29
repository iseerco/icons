import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FlipHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M9.356,0,.375,19.759A3,3,0,0,0,3.106,24H11V1.046L10.993,0ZM9,22H3.106a1,1,0,0,1-.911-1.414L9,5.616Z"/><path d="M23.625,19.759,14.93.628,14.626,0H13V24h7.894a3,3,0,0,0,2.731-4.241Z"/></g></svg>

);
