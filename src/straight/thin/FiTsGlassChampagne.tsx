import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsGlassChampagne = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.505,18.983c3.628-.257,6.5-3.292,6.499-7.025l-1.04-11.958H6.046l-1.041,12.001c0,3.692,2.872,6.724,6.5,6.982l-.004,4.019h-4.501v1h10v-1h-4.499l.004-4.018ZM17.047,1l.349,4H6.616l.348-4h10.083ZM6.003,12.044l.525-6.044h10.954l.523,6.001c0,3.309-2.691,6-6,6s-6-2.691-6.002-5.957Z"/></svg>

);
