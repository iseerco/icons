import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Neuter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,8C20,3.589,16.411,0,12,0S4,3.589,4,8c0,4.073,3.059,7.444,7,7.938v7.062c0,.553.448,1,1,1s1-.447,1-1v-7.062c3.941-.494,7-3.865,7-7.938Zm-8,6c-3.309,0-6-2.691-6-6s2.691-6,6-6,6,2.691,6,6-2.691,6-6,6Z"/>
</svg>

);
