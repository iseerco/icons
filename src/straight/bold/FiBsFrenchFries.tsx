import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFrenchFries = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24.029,5.9,21.2,4.906,19.059,11H17.63L19.475.766,16.523.234,14.582,11H13.5V0h-3V11H9.437L7.5.234,4.544.766,6.389,11H4.962L2.985,4.82.128,5.734,1.813,11H.029L2.318,21.262A3.479,3.479,0,0,0,5.734,24H18.269a3.48,3.48,0,0,0,3.414-2.732L23.994,11H22.239Zm-5.272,14.71a.5.5,0,0,1-.488.391H5.734a.5.5,0,0,1-.488-.391L3.772,14H20.244Z"/></svg>

);
