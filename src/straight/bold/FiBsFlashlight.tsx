import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFlashlight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.933,11.188L12.812.067l-3.812,3.812v4.72L.958,16.773c-1.363,1.364-1.363,3.585,0,4.949l1.252,1.252c.681.682,1.576,1.022,2.472,1.022s1.799-.344,2.487-1.031l7.836-7.966h5.117l3.812-3.812Zm-11.608,2.258l-1.616,1.642-1.959-1.959,1.616-1.642,1.959,1.959Zm-7.286,7.407c-.195.196-.512.195-.708,0l-1.251-1.252c-.195-.195-.195-.512.008-.716l3.559-3.618,1.959,1.959-3.567,3.627Zm13.84-8.854h-3.758l-3.121-3.121v-3.758l.812-.812,6.879,6.879-.812.812Z"/>
</svg>

);
