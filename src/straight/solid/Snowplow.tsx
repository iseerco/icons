import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Snowplow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.2,8H6V1H9.117a2.992,2.992,0,0,1,2.738,1.766ZM22,16.72V8H20v4H16.857a3.07,3.07,0,0,0-2.888-2H4V6A3,3,0,0,0,1,9l.008,4.806A5.958,5.958,0,0,1,4,13H14a5.962,5.962,0,0,1,3.31,1H20v2.72a8.833,8.833,0,0,0,2.6,6.29L24.01,21.6A6.848,6.848,0,0,1,22,16.72ZM18,19a4.005,4.005,0,0,1-4,4H4c-5.276-.139-5.272-7.862,0-8H14A4,4,0,0,1,18,19ZM6,19a1,1,0,0,0-2,0A1,1,0,0,0,6,19Zm4,0a1,1,0,0,0-2,0A1,1,0,0,0,10,19Zm4,0a1,1,0,0,0-2,0A1,1,0,0,0,14,19Z"/></svg>

);
