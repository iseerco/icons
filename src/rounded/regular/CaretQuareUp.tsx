import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretQuareUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,0H19a5.006,5.006,0,0,1,5,5V19a5.006,5.006,0,0,1-5,5H5a5.006,5.006,0,0,1-5-5V5A5.006,5.006,0,0,1,5,0ZM19,22a3,3,0,0,0,3-3V5a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3Zm-1.269-8.6L12.644,8.25a.9.9,0,0,0-1.288,0L6.269,13.4a.924.924,0,0,0,.644,1.575H17.087A.924.924,0,0,0,17.731,13.4Z"/></svg>

);
