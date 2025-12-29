import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Brazil = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M9,14c-.5,0-1-.5-1-1v-1h-1c-.552,0-1-.448-1-1v-1H3l-2-1v-2s2-1.5,2-1.5V2.5s1.5-1,1.5-1c0,0,.816,1.717,1.308,1.538,.423-.154,.192-2.038,.192-2.038l2.615-1,1.385,2h1l2-1.5,1.5,1-.008,1.396,2.153,.766c1.561,.556,3.03,1.344,4.355,2.338h0s2,0,2,0v3.499c-.267,.561-2.5,2-3,2.501v.5c0,3.117-2.118,4.452-2.5,4.5-1.356,.169-1.846,1.086-2.212,2.401-.788,3.099-3.288,4.599-3.288,4.599,0,0-3-2-3-3,.512-.729,2-1.333,2-1.333v-1.167l-2-2v-2.5Z"/>
</svg>

);
