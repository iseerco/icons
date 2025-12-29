import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsForwardFast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,0v8.741L8,.121v5.593L0,0v23.606l8-5.714v5.713l13-9.28v9.674h3V0h-3Zm-1.563,11.755l-8.437,6.022v-5.715l-8,5.714V5.83l8,5.714v-5.835l8.436,5.594c.072.051.117.138.117.227,0,.088-.044.175-.116.226Z"/>
</svg>

);
