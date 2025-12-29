import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Parking = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,9.5c0,1.378-1.121,2.5-2.5,2.5h-4.5v-4c0-.551,.448-1,1-1h3.5c1.379,0,2.5,1.122,2.5,2.5ZM24,3V24H0V3C0,1.346,1.346,0,3,0H21c1.654,0,3,1.346,3,3Zm-6,6.5c0-2.481-2.019-4.5-4.5-4.5h-3.5c-1.654,0-3,1.346-3,3v11h2v-5h4.5c2.481,0,4.5-2.019,4.5-4.5Z"/></svg>

);
