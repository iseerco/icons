import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCarBuilding = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,19.077a9.485,9.485,0,0,0-.439-2.856l-1.19-3.772A3.484,3.484,0,0,0,19.033,10H14.967a3.484,3.484,0,0,0-3.338,2.448l-1.19,3.774A9.474,9.474,0,0,0,10,19.077V22h2v2h4V22h2v2h4V22h2ZM14.967,13h4.066a.5.5,0,0,1,.477.35L20.345,16h-6.69l.835-2.651A.5.5,0,0,1,14.967,13ZM14.5,3H3.5a.5.5,0,0,0-.5.5V24H0V3.5A3.5,3.5,0,0,1,3.5,0h11A3.5,3.5,0,0,1,18,3.5V8H15V3.5A.5.5,0,0,0,14.5,3ZM5,5H8V8H5Zm0,5H8v3H5Zm0,5H8v3H5Zm0,5H8v3H5ZM10,8V5h3V8Z"/></svg>

);
