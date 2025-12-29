import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRulerTriangle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.162,19.131L4.87,.839C4.051,.021,2.831-.222,1.761,.22,.691,.663,0,1.697,0,2.855V24H21.145c1.158,0,2.192-.691,2.635-1.761,.443-1.069,.201-2.289-.618-3.108Zm-20.162,1.869V3.212l3.945,3.945-1.394,1.394,2.121,2.121,1.394-1.394,1.768,1.768-1.394,1.394,2.121,2.121,1.394-1.394,1.768,1.768-1.394,1.394,2.121,2.121,1.394-1.394,3.945,3.945H3Zm3-9l6,6H6v-6Z"/></svg>

);
