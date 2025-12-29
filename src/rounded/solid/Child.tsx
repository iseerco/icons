import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Child = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9.5,6.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm6.5,6.5v3c0,.883-.391,1.67-1,2.22v4.742c0,.553-.448,1-1,1s-1-.447-1-1v-3.962h-2v3.962c0,.553-.448,1-1,1s-1-.447-1-1v-4.742c-.609-.549-1-1.337-1-2.22v-3c0-1.654,1.346-3,3-3h2c1.654,0,3,1.346,3,3Z"/>
</svg>

);
