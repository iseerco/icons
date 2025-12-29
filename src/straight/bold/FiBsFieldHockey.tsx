import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFieldHockey = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.674.024,9.82,15.452a.95.95,0,1,1-1.728-.792A4,4,0,1,0,.817,11.329,8.951,8.951,0,1,0,17.1,18.77L23.947,3.356Zm1.51,3.992L20,4.849l-2.335,5.258-1.819-.833Zm-3.818,13.52A5.951,5.951,0,0,1,3.545,12.579a1,1,0,1,1,1.819.833,3.95,3.95,0,1,0,7.19,3.275l2.075-4.671,1.819.833ZM24,21a3,3,0,1,1-3-3A3,3,0,0,1,24,21Z"/></svg>

);
