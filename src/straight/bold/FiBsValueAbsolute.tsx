import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsValueAbsolute = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.061,8.061l-3.939,3.939,3.939,3.939-2.121,2.121-3.939-3.939-3.939,3.939-2.121-2.121,3.939-3.939-3.939-3.939,2.121-2.121,3.939,3.939,3.939-3.939,2.121,2.121ZM0,24h3V0H0v24ZM21,0v24h3V0h-3Z"/></svg>

);
