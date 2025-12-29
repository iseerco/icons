import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFilterList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,5.49c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,1.99,0,3.561,0,5.49v2.086l6,6.51v4.151l5,3.774v-7.926l6-6.51v-2.086Zm-3,.914l-5.5,5.967L3,6.404v-.914c0-.276.224-.5.5-.5h10c.276,0,.5.224.5.5v.914Zm0,12.596h10v3h-10v-3Zm0-5h10v3h-10v-3Zm10-5v3h-8.357l2.765-3h5.592Z"/>
</svg>

);
