import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Drawer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.038,14H2.038v-6h8.962v1c0,.552.448,1,1,1s1-.448,1-1v-1h9.038v6Zm0-8v-2c0-2.209-1.791-4-4-4h-5.038v1c0,.552-.448,1-1,1s-1-.448-1-1V0h-4.962C3.829,0,2.038,1.791,2.038,4v2h20Zm-9.038,10v1c0,.553-.448,1-1,1s-1-.447-1-1v-1H2.038v7c0,.553.448,1,1,1s1-.447,1-1v-1h16v1c0,.553.448,1,1,1s1-.447,1-1v-7h-9.038Z"/>
</svg>

);
