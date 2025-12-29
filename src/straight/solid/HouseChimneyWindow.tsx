import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseChimneyWindow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,16h-4v-4h4v4Zm10-5.957v13.957H0V10.043c0-.929,.42-1.79,1.151-2.363L10.151,.638c1.089-.852,2.608-.851,3.697,0l6.151,4.814V2h2V7h-.021l.87,.681c.731,.572,1.151,1.434,1.151,2.362Zm-8-.043H8v8h8V10Z"/></svg>

);
