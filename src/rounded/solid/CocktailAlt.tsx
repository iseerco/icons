import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CocktailAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.869,12.888l8.173-7.551c2.076-1.783.479-5.448-2.2-5.337H3.156A3.169,3.169,0,0,0,.13,4H17a1,1,0,0,1,0,2H1.675l7.462,6.894A4.232,4.232,0,0,0,11,13.87V22H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2H13V13.869A4.253,4.253,0,0,0,14.869,12.888Z"/></svg>

);
