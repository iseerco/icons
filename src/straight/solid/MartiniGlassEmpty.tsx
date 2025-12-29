import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MartiniGlassEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24.104,0v1c0,1.552-.658,3.041-1.807,4.085l-9.193,8.358v8.557h5v2H6.104v-2h5v-8.557L1.911,5.085C.763,4.041.104,2.552.104,1V0h24Z"/>
</svg>

);
