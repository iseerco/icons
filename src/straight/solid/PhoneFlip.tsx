import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PhoneFlip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7.5,24c-1.61,0-3.1-.61-4.21-1.72L.12,19.11l6.26-6.27,3.41,3.41c2.96-1.28,5.08-3.41,6.45-6.47l-3.41-3.41L19.11,.12l3.17,3.17c1.11,1.1,1.72,2.6,1.72,4.21,0,7.25-9.25,16.5-16.5,16.5Z"/></svg>

);
