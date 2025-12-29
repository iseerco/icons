import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Hose = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,18h24v2H0v-2Zm0,6h24v-2H0v2Zm0-8h24v-2H0v2ZM16.135,5.961l7.865-1.461V1.5L16.135.039c-.594-.099-1.135.359-1.135.961v1H5C2.243,2,0,4.243,0,7s2.243,5,5,5h19v-2H5c-1.654,0-3-1.346-3-3s1.346-3,3-3h10v1c0,.602.541,1.06,1.135.961Z"/>
</svg>

);
