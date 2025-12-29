import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HospitalSymbol = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm5,17c0,.552-.447,1-1,1s-1-.448-1-1v-4h-6v4c0,.552-.447,1-1,1s-1-.448-1-1V7c0-.552.447-1,1-1s1,.448,1,1v4h6v-4c0-.552.447-1,1-1s1,.448,1,1v10Z"/></svg>

);
