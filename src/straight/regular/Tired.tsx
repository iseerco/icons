import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tired = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,18a21.923,21.923,0,0,0-6.007-1,21.841,21.841,0,0,0-6,1c.615-2.28,2.671-5,6.007-5S17.385,15.72,18,18Zm6-6A12,12,0,1,1,12,0,12.013,12.013,0,0,1,24,12Zm-2,0A10,10,0,1,0,12,22,10.011,10.011,0,0,0,22,12Zm-4.375-1.781L16.1,9l1.524-1.219-1.25-1.562L12.9,9l3.476,2.781Zm-10,1.562L11.1,9,7.625,6.219,6.375,7.781,7.9,9,6.375,10.219Z"/></svg>

);
