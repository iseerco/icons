import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsH3 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,4h1v16h-1v-7.5H1v7.5H0V4h1v7.5h10v-7.5Zm10.205,7.336c1.081-.717,1.795-1.944,1.795-3.336,0-2.206-1.794-4-4-4h-5v1h5c1.654,0,3,1.346,3,3s-1.346,3-3,3h-3v1h3.5c1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5h-5.5v1h5.5c2.481,0,4.5-2.019,4.5-4.5,0-1.878-1.157-3.491-2.795-4.164Z"/></svg>

);
