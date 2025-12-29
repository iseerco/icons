import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CV = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2,0v21c0,1.654,1.346,3,3,3h9.414l7.586-7.586V0H2Zm13,20.586v-3.586h3.586l-3.586,3.586Zm5-5.586h-7v7H5c-.551,0-1-.448-1-1V2h16v13Zm-7.24-4.531l-1.268-6.213h1.633l1.202,5.893c.013.065.031.117.05.159.02-.047.042-.109.057-.188l1.182-5.864h1.632l-1.244,6.169c-.126.647-.461,1.575-1.628,1.575s-1.51-.97-1.618-1.531Zm-6.76-.969v-3c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5v.5h-1.6v-.5c0-.496-.404-.9-.9-.9s-.9.404-.9.9v3c0,.496.404.9.9.9s.9-.404.9-.9v-.5h1.6v.5c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5Z"/>
</svg>

);
