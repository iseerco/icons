import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Melon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.018.793,19.311.086.086,19.312l.707.707a13.613,13.613,0,0,0,19.225,0,13.594,13.594,0,0,0,0-19.226ZM15,10.21a4.793,4.793,0,0,1-7.153,4.169l6.532-6.532A4.764,4.764,0,0,1,15,10.21ZM18.6,18.6a11.61,11.61,0,0,1-15.66.677L6.4,15.83A6.793,6.793,0,0,0,15.83,6.4l3.451-3.452A11.6,11.6,0,0,1,18.6,18.6Z"/></svg>

);
