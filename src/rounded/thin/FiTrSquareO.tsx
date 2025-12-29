import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrSquareO = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,4c-3.86,0-7,3.14-7,7v2c0,3.859,3.14,7,7,7s7-3.141,7-7v-2c0-3.86-3.14-7-7-7Zm6,9c0,3.309-2.691,6-6,6s-6-2.691-6-6v-2c0-3.309,2.691-6,6-6s6,2.691,6,6v2Zm1.5-13H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,19.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v15Z"/></svg>

);
