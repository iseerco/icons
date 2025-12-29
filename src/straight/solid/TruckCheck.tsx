import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,1H3C1.346,1,0,2.346,0,4v14h15V4c0-1.654-1.346-3-3-3Zm-3.849,11.414c-.39.39-.902.585-1.414.585s-1.024-.195-1.414-.585l-2.673-2.673,1.414-1.414,2.673,2.673,4.198-4.199,1.414,1.414-4.198,4.199Zm13.791,7.586c.034.162.058.328.058.5,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-.172.024-.338.058-.5h4.885Zm-14,0c.034.162.058.328.058.5,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-.172.024-.338.058-.5h4.885Zm16.058-10v1h-7v-6h2c2.757,0,5,2.243,5,5Zm-7,3h7v5h-7v-5Z"/>
</svg>

);
