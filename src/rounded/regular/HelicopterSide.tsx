import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HelicopterSide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,14a8.009,8.009,0,0,0-8-8V4h7a1,1,0,0,0,0-2H16a1,1,0,0,0-2,0H7A1,1,0,0,0,7,4h7V6H2V5A1,1,0,0,0,0,5S.012,7.18.035,7.264A4.019,4.019,0,0,0,2.9,10.583L7,11.754V13a6.01,6.01,0,0,0,4,5.657V21H7a1,1,0,0,0,0,2H21a3,3,0,0,0,3-3,1,1,0,0,0-2,0,1,1,0,0,1-1,1H19V19A5.006,5.006,0,0,0,24,14Zm-2.084-1H17a1,1,0,0,1-1-1V8A6.009,6.009,0,0,1,21.916,13ZM9,13V11a1,1,0,0,0-.725-.961L3.45,8.66a2,2,0,0,1-1-.66H14v4a3,3,0,0,0,3,3h4.828A3,3,0,0,1,19,17H13A4,4,0,0,1,9,13Zm8,8H13V19h4Z"/></svg>

);
