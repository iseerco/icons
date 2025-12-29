import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLamp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15.5,19s-2,0-2-1.5v-2.5h10.488l-2.013-12.074c-.281-1.695-1.733-2.926-3.452-2.926H5.477c-1.719,0-3.171,1.23-3.452,2.925L.012,15h10.488v2.5c0,1.5-2,1.5-2,1.5-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h7c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5ZM4.983,3.417c.04-.242.248-.417.493-.417h13.047c.245,0,.453.175.493.418l1.431,8.582H3.553l1.431-8.583Z"/>
</svg>

);
