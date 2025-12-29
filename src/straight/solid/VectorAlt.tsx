import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VectorAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,16V12a8.962,8.962,0,0,0-3.371-7h2.648a1.991,1.991,0,1,0-.009-2h-4.41A3.981,3.981,0,0,0,8.142,3H3.723a1.991,1.991,0,1,0,.009,2H6.371A8.962,8.962,0,0,0,3,12v4H0v5a3,3,0,0,0,3,3H8V16H5V12A6.993,6.993,0,0,1,8.522,5.937a3.963,3.963,0,0,0,6.956,0A6.993,6.993,0,0,1,19,12v4H16v8h5a3,3,0,0,0,3-3V16Z"/></svg>

);
