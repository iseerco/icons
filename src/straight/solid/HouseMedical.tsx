import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,13h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3Zm11-2.957v13.957H0V10.043c0-.929,.42-1.79,1.151-2.363L10.151,.638c1.089-.852,2.608-.851,3.697,0l9,7.044c.731,.572,1.151,1.434,1.151,2.362Zm-6,.957h-3v-3h-6v3h-3v6h3v3h6v-3h3v-6Z"/></svg>

);
