import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SunSalutationYoga = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm8,4.91l-1.57,2.149-2.16-2.66c-.592-.555-1.356-.872-2.163-.897-1.707-.054-3.106,1.441-3.106,3.15v5.031c0,1.205.62,2.325,1.64,2.965l1.36.853v6h2v-11.098l-1-1.258v-3.149l2.83,3.505h1.293l2.492-3.41-1.615-1.18Z"/>
</svg>

);
