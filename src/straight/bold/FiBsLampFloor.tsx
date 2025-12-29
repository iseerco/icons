import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLampFloor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.5,11h7.082l-1.346-8.074c-.281-1.695-1.733-2.926-3.452-2.926h-7.568c-1.718,0-3.17,1.23-3.453,2.925l-1.346,8.075h7.083v10h-3.5v3h10v-3h-3.5v-10ZM7.722,3.418c.041-.242.248-.418.494-.418h7.568c.245,0,.453.175.493.418l.764,4.582H6.958l.764-4.582Z"/>
</svg>

);
