import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPersonSeat = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6.5,5c1.378,0,2.5-1.121,2.5-2.5S7.878,0,6.5,0s-2.5,1.121-2.5,2.5,1.122,2.5,2.5,2.5Zm0-4c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm14.5,22v1h-2.877l-2-7h-7.623c-1.378,0-2.5-1.121-2.5-2.5v-7.5h1v4h8v1H7v2.5c0,.827.673,1.5,1.5,1.5h8.377l2,7h2.123Zm-6.386-4l.286,1h-6.4c-3.033,0-5.5-2.468-5.5-5.5v-7.5h1v7.5c0,2.481,2.019,4.5,4.5,4.5h6.114Z"/></svg>

);
