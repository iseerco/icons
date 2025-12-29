import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AlignSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6.757,11H0v-2h4.757l2,2Zm3,3H0v2h11.757l-2-2ZM0,4.243v1.757h1.757l-1.757-1.757Zm0,14.757v2h16.757l-2-2H0ZM24,6v-2H5.414L1.457.043.043,1.457l22.5,22.5,1.414-1.414-1.543-1.543h1.586v-2h-3.586l-3-3h6.586v-2h-8.586l-3-3h11.586v-2h-13.586l-3-3h16.586Z"/></svg>

);
