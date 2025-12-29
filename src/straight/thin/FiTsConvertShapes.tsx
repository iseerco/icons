import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsConvertShapes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,24h10v-10H0v10Zm1-9h8v8H1v-8ZM24,5.5c0-3.032-2.468-5.5-5.5-5.5s-5.5,2.468-5.5,5.5,2.467,5.5,5.5,5.5,5.5-2.468,5.5-5.5Zm-10,0c0-2.481,2.019-4.5,4.5-4.5s4.5,2.019,4.5,4.5-2.019,4.5-4.5,4.5-4.5-2.019-4.5-4.5ZM7.21,1H2V0h5.5c.827,0,1.5.673,1.5,1.5v5.5h-1V1.756C3.787,3.394,1,7.425,1,12H0C0,7.165,2.854,2.889,7.21,1Zm9.578,22h5.212v1h-5.5c-.827,0-1.5-.673-1.5-1.5v-5.5h1v5.243c4.213-1.638,7-5.668,7-10.243h1c0,4.835-2.855,9.112-7.212,11Z"/>
</svg>

);
