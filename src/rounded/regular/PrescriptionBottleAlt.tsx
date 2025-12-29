import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PrescriptionBottleAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23,3c0-1.654-1.346-3-3-3H4C2.346,0,1,1.346,1,3c0,1.304.836,2.415,2,2.828v13.172c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V5.828c1.164-.413,2-1.524,2-2.828Zm-7,19h-8c-1.654,0-3-1.346-3-3V6h14v13c0,1.654-1.346,3-3,3Zm4-18H4c-.551,0-1-.448-1-1s.449-1,1-1h16c.551,0,1,.448,1,1s-.449,1-1,1Zm-4,10c0,.553-.448,1-1,1h-2v2c0,.553-.448,1-1,1s-1-.447-1-1v-2h-2c-.552,0-1-.447-1-1s.448-1,1-1h2v-2c0-.553.448-1,1-1s1,.447,1,1v2h2c.552,0,1,.447,1,1Z"/></svg>

);
