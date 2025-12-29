import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TachometerFast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,1C.374.982-4.414,16.17,5.112,22.818l.639.449L8,20h8l2.249,3.267.639-.449C28.418,16.166,23.621.98,12,1ZM10.586,14.414a2.005,2.005,0,0,1,1.925-3.339l5.146-5.146,1.414,1.414-5.146,5.146A2.005,2.005,0,0,1,10.586,14.414Z"/></svg>

);
