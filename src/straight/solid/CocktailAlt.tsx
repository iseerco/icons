import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CocktailAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,0V1A5.519,5.519,0,0,0,.9,4H16.758l-2,2H2.813L11,13.443V22H6v2H18V22H13V13.443l9.193-8.358A5.53,5.53,0,0,0,24,1V0Z"/></svg>

);
