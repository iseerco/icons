import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Rss = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5ZM6.5,19c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm5.5,0c-.552,0-1-.447-1-1,0-2.757-2.243-5-5-5-.552,0-1-.447-1-1s.448-1,1-1c3.86,0,7,3.141,7,7,0,.553-.448,1-1,1Zm6,0c-.552,0-1-.447-1-1,0-6.065-4.935-11-11-11-.552,0-1-.447-1-1s.448-1,1-1c7.168,0,13,5.832,13,13,0,.553-.448,1-1,1Z"/></svg>

);
