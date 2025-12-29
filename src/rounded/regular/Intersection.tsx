import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Intersection = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,24c-.553,0-1-.447-1-1v-13c0-4.411-3.589-8-8-8S4,5.589,4,10v13c0,.553-.448,1-1,1s-1-.447-1-1v-13C2,4.486,6.486,0,12,0s10,4.486,10,10v13c0,.553-.447,1-1,1Z"/>
</svg>

);
