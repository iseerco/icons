import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrH3 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,4.5v15c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-7.5H1v7.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5V4.5c0-.276.224-.5.5-.5s.5.224.5.5v6.5h10v-6.5c0-.276.224-.5.5-.5s.5.224.5.5Zm9.245,6.033c1.048-.605,1.755-1.738,1.755-3.033,0-1.93-1.57-3.5-3.5-3.5h-5c-.276,0-.5.224-.5.5s.224.5.5.5h5c1.379,0,2.5,1.121,2.5,2.5s-1.121,2.5-2.5,2.5h-3c-.276,0-.5.224-.5.5s.224.5.5.5h2.5c2.206,0,4,1.794,4,4s-1.794,4-4,4h-4.5c-.276,0-.5.224-.5.5s.224.5.5.5h4.5c2.757,0,5-2.243,5-5,0-1.95-1.123-3.643-2.755-4.467Z"/></svg>

);
