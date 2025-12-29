import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const J = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,24H7c-2.757,0-5-2.243-5-5v-1c0-.552,.447-1,1-1s1,.448,1,1v1c0,1.654,1.346,3,3,3h10c1.654,0,3-1.346,3-3V1c0-.552,.447-1,1-1s1,.448,1,1V19c0,2.757-2.243,5-5,5Z"/></svg>

);
