import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CardinalCompass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M16.951,14.628l6.835-2.628-6.835-2.629,2.549-4.871-4.872,2.549L12,.214l-2.629,6.834-4.871-2.549,2.549,4.871L.214,12l6.835,2.628-2.549,4.872,4.871-2.549,2.629,6.835,2.628-6.835,4.872,2.549-2.549-4.872Zm-4.951,3.586l-1.726-4.487-4.488-1.727,4.488-1.726,1.726-4.488,1.727,4.488,4.487,1.726-4.487,1.727-1.727,4.487Z"/>
</svg>

);
