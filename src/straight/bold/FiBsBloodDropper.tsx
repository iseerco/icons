import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBloodDropper = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M17.5,3h-2.051c-.245-1.692-1.691-3-3.449-3s-3.204,1.308-3.449,3h-2.051C3.467,3,1,5.467,1,8.5v8c0,3.032,2.467,5.5,5.5,5.5h1.5v2.079h3v-2.079h2v2.079h3v-2.079h1.5c3.032,0,5.5-2.468,5.5-5.5V8.5c0-3.033-2.468-5.5-5.5-5.5Zm0,16H6.5c-1.378,0-2.5-1.121-2.5-2.5v-4.5H14v-3H4v-.5c0-1.378,1.122-2.5,2.5-2.5h11c1.379,0,2.5,1.122,2.5,2.5v.5h-4v3h4v2h-4v3h3.949c-.232,1.14-1.242,2-2.449,2Z"/>
</svg>

);
