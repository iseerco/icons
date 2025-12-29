import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Square7 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-3.211,8.894l-4.921,8.603c-.185,.322-.522,.503-.869,.503-.168,0-.339-.042-.496-.132-.479-.274-.646-.886-.372-1.365L14.026,7.951l-5.026,.049c-.552,0-1-.448-1-1s.448-1,1-1h5c.698,0,1.334,.354,1.701,.948s.4,1.321,.088,1.946Z"/></svg>

);
