import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const S = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.151,24H7.917c-3.263,0-5.917-2.654-5.917-5.917v-1.083c.005-1.308,1.995-1.307,2,0v1.083c0,2.16,1.757,3.917,3.917,3.917h8.234c4.441-.016,5.282-6.386,1.01-7.562l-10.846-2.945C-.195,9.644,1.077,.077,7.849,0h8.234c3.263,0,5.917,2.654,5.917,5.917v1.083c-.005,1.308-1.995,1.307-2,0v-1.083c0-2.16-1.757-3.917-3.917-3.917H7.849c-4.441,.016-5.282,6.386-1.01,7.562l10.846,2.945c6.511,1.848,5.238,11.415-1.533,11.492Z"/></svg>

);
