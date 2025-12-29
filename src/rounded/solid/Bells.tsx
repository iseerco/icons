import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bells = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.27,19H9.15c-1.35,0-2.62-.61-3.46-1.66-.85-1.05-1.16-2.42-.87-3.74l1.37-5.2c.84-3.77,4.11-6.39,7.97-6.39,3.65,0,6.89,2.46,7.86,5.98l1.54,5.43c.37,1.31,.09,2.73-.75,3.84-.85,1.12-2.14,1.76-3.54,1.76Zm-8.97,2.01c.45,1.72,2,2.99,3.86,2.99s3.41-1.27,3.86-2.99h-7.72ZM2.86,13.16l1.39-5.28C5.09,4.1,7.99,1.23,11.65,.31c-.71-.2-1.44-.31-2.2-.31C5.59,0,2.31,2.63,1.48,6.39L.11,11.59c-.29,1.32,.03,2.69,.87,3.74,.56,.7,1.31,1.2,2.14,1.46-.42-1.14-.52-2.4-.25-3.63Z"/></svg>

);
