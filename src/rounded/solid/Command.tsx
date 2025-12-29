import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Command = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.5,15h-2.5v-6h2.5c2.481,0,4.5-2.019,4.5-4.5S21.981,0,19.5,0s-4.5,2.019-4.5,4.5v2.5h-6v-2.5C9,2.019,6.981,0,4.5,0S0,2.019,0,4.5s2.019,4.5,4.5,4.5h2.5v6h-2.5c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5,4.5-2.019,4.5-4.5v-2.5h6v2.5c0,2.481,2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5-2.019-4.5-4.5-4.5Zm-2.5-10.5c0-1.378,1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5-1.121,2.5-2.5,2.5h-2.5v-2.5Zm-12.5,2.5c-1.379,0-2.5-1.122-2.5-2.5s1.121-2.5,2.5-2.5,2.5,1.122,2.5,2.5v2.5h-2.5Zm2.5,12.5c0,1.378-1.121,2.5-2.5,2.5s-2.5-1.122-2.5-2.5,1.121-2.5,2.5-2.5h2.5v2.5Zm2-4.5v-6h6v6h-6Zm10.5,7c-1.379,0-2.5-1.122-2.5-2.5v-2.5h2.5c1.379,0,2.5,1.122,2.5,2.5s-1.121,2.5-2.5,2.5Z"/>
</svg>

);
