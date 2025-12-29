import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Fork = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.606,5.636l-6.072,6.071a1.022,1.022,0,0,1-1.413,0L14.414,11l6.778-6.778L19.778,2.808,13,9.586l-.707-.707a1,1,0,0,1,0-1.414l6.071-6.071L16.95-.021,10.879,6.05a3,3,0,0,0,0,4.243l.707.707L.043,22.543l1.414,1.414L13,12.414l.707.707a3,3,0,0,0,4.242,0L24.021,7.05Z"/></svg>

);
