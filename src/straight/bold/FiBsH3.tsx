import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsH3 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9,4h3v16h-3v-7H3v7H0V4h3v6h6v-6Zm13.154,7.123c.532-.739.846-1.645.846-2.623,0-2.481-2.019-4.5-4.5-4.5h-4.5v3h4.5c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5h-2.5v3h3c1.103,0,2,.897,2,2s-.897,2-2,2h-5v3h5c2.757,0,5-2.243,5-5,0-1.562-.72-2.959-1.846-3.877Z"/></svg>

);
