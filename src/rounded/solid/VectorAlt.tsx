import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VectorAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,16V12a8.983,8.983,0,0,0-3.356-7h2.633a1.991,1.991,0,1,0-.009-2h-4.41A3.981,3.981,0,0,0,8.142,3H3.723a1.991,1.991,0,1,0,.009,2H6.356A8.983,8.983,0,0,0,3,12v4a3,3,0,0,0-3,3v2a3,3,0,0,0,3,3H5a3,3,0,0,0,3-3V19a3,3,0,0,0-3-3V12A7,7,0,0,1,8.521,5.935a3.963,3.963,0,0,0,6.958,0A7,7,0,0,1,19,12v4a3,3,0,0,0-3,3v2a3,3,0,0,0,3,3h2a3,3,0,0,0,3-3V19A3,3,0,0,0,21,16Z"/></svg>

);
