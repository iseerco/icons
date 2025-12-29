import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Curve = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1,24c-.552,0-1-.447-1-1C0,10.317,10.318,0,23,0c.553,0,1,.447,1,1s-.447,1-1,1C11.42,2,2,11.421,2,23c0,.553-.448,1-1,1Z"/>
</svg>

);
