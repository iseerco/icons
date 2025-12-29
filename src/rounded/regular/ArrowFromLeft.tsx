import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowFromLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.121,9.886,18.542,5.307a1,1,0,0,0-1.414,1.414L21.407,11H2V6A1,1,0,0,0,0,6V18a1,1,0,0,0,2,0V13H21.422l-4.294,4.293a1,1,0,1,0,1.414,1.414l4.58-4.578A3,3,0,0,0,23.121,9.886Z"/></svg>

);
