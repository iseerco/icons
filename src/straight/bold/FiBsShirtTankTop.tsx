import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsShirtTankTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,7.83c-1.196-.423-2-1.561-2-2.83V0h-3v4c0,1.654-1.346,3-3,3s-3-1.346-3-3V0h-3v5c0,1.27-.804,2.407-2,2.83l-1,.354v15.816h18v-15.816l-1-.354Zm-2,13.17H6v-10.803c.777-.449,1.435-1.064,1.935-1.788,1.07.987,2.498,1.591,4.065,1.591s2.995-.604,4.065-1.591c.5.724,1.158,1.339,1.935,1.788v10.803Z"/>
</svg>

);
