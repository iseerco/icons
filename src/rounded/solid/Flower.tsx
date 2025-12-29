import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Flower = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.8,12c4.939-2.989.773-10.453-4.4-7.632-.173-5.774-8.629-5.771-8.8,0C2.467,1.551-1.762,8.986,3.2,11.944c-4.949,3.035-.8,10.211,4.4,7.692.18,5.77,8.622,5.765,8.8,0C21.562,22.153,25.772,15,20.8,12ZM12,16a4,4,0,0,1,0-8A4,4,0,0,1,12,16Zm2-4a2,2,0,0,1-4,0A2,2,0,0,1,14,12Z"/></svg>

);
