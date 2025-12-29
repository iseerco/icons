import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Luchador = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,13v1H7a1,1,0,0,1-1-1V12H8A1,1,0,0,1,9,13Zm15-1V24H16.727l-1.769-3.245a3.37,3.37,0,0,0-5.916,0L7.273,24H0V12.365A12.248,12.248,0,0,1,11.775,0,12,12,0,0,1,24,12ZM11,13a3,3,0,0,0-3-3H6V8H4v5a3,3,0,0,0,3,3h4Zm9-5H18v2H16a3,3,0,0,0-3,3v3h4a3,3,0,0,0,3-3Zm-5,5v1h2a1,1,0,0,0,1-1V12H16A1,1,0,0,0,15,13Z"/></svg>

);
