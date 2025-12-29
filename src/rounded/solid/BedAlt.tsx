import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BedAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,12V6C0,3.243,2.243,1,5,1h14c2.757,0,5,2.243,5,5v6h-3v-1c0-2.206-1.794-4-4-4h-2c-1.2,0-2.266,.542-3,1.382-.734-.84-1.8-1.382-3-1.382h-2c-2.206,0-4,1.794-4,4v1H0Zm9-3h-2c-1.103,0-2,.897-2,2v1h6v-1c0-1.103-.897-2-2-2Zm10,2c0-1.103-.897-2-2-2h-2c-1.103,0-2,.897-2,2v1h6v-1ZM0,14v6c0,.553,.448,1,1,1s1-.447,1-1v-2H22v2c0,.553,.447,1,1,1s1-.447,1-1v-6H0Z"/></svg>

);
