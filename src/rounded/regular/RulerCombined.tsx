import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RulerCombined = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,14H10V4C10,1.794,8.206,0,6,0h-2C1.794,0,0,1.794,0,4v15c0,2.757,2.243,5,5,5h15c2.206,0,4-1.794,4-4v-2c0-2.206-1.794-4-4-4Zm2,6c0,1.103-.897,2-2,2H5c-1.654,0-3-1.346-3-3V4c0-1.103,.897-2,2-2h2c1.103,0,2,.897,2,2v2h-2c-.552,0-1,.447-1,1s.448,1,1,1h2v2h-2c-.552,0-1,.447-1,1s.448,1,1,1h2v2h-2c-.552,0-1,.447-1,1s.448,1,1,1h2v2c0,.553,.448,1,1,1s1-.447,1-1v-2h2v2c0,.553,.448,1,1,1s1-.447,1-1v-2h2v2c0,.553,.447,1,1,1s1-.447,1-1v-2h2c1.103,0,2,.897,2,2v2Z"/></svg>

);
