import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsEffect = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.357,3l3.749,13.561c1.643.288,2.894,1.713,2.894,3.439,0,1.933-1.567,3.5-3.5,3.5s-3.5-1.567-3.5-3.5c0-1.055.477-1.99,1.216-2.632l-3.972-14.368h-2.244v14.35c1.179.563,2,1.756,2,3.15,0,1.933-1.567,3.5-3.5,3.5s-3.5-1.567-3.5-3.5c0-1.394.821-2.587,2-3.15V3h-4v14.35c1.179.563,2,1.756,2,3.15,0,1.933-1.567,3.5-3.5,3.5s-3.5-1.567-3.5-3.5c0-1.394.821-2.587,2-3.15V3H0V0h24v3h-6.643Z"/>
</svg>

);
