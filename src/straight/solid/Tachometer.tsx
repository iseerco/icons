import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tachometer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,1C.373.981-4.414,16.17,5.112,22.818L5.371,23H18.629l.259-.182C28.418,16.167,23.621.98,12,1Zm0,14a1.994,1.994,0,1,1,.512-3.926l4.781-4.781,1.414,1.414-4.781,4.781A2,2,0,0,1,12,15Z"/></svg>

);
