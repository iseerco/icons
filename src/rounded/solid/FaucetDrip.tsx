import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FaucetDrip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,5v11H1c-.552,0-1-.447-1-1v-6c0-.553.448-1,1-1h8v-3h-4c-.552,0-1-.447-1-1s.448-1,1-1h10c.553,0,1,.447,1,1s-.447,1-1,1h-4Zm4,3h-2v8h2c.552,0,1,.448,1,1,0,1.103.897,2,2,2h4c1.103,0,2-.897,2-2,0-4.963-4.037-9-9-9Z"/>
</svg>

);
