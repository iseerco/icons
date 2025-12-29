import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Carrot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,5H20.414l3.293-3.293L22.293.293,19,3.586V0H17V5.456A10.139,10.139,0,0,0,14.146,3.33,3.754,3.754,0,0,0,9.759,4.345l3.64,3.64L11.985,9.4,8.55,5.964c-.759,1.208-1.635,2.863-2.518,4.654L9.284,13.87,7.87,15.284,5.112,12.526c-1.935,4.09-3.7,8.28-4.035,9.089L.139,23.861l2.247-.938c1.083-.453,8.248-3.467,13.1-6.024L12.7,14.111,14.111,12.7l3.2,3.2a12.507,12.507,0,0,0,2.316-1.615,3.766,3.766,0,0,0,1.049-4.422A10.167,10.167,0,0,0,18.544,7H24Z"/></svg>

);
