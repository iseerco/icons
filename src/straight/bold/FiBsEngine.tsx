import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsEngine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,9v-3h-5v-2h3V1h-9v3h3v2h-2.703l-2.5,3h-2.797v3h-2v-3H0v9h3v-3h2v3.121l3.879,3.879h12.121v-2h3v-11h-3Zm0,8h-3v2h-7.879l-2.121-2.121v-4.879h1.203l2.5-3h6.297v3h3v5Z"/>
</svg>

);
