import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Circle7 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.78,17.987l-1.79-.893,4.537-9.095h-5.527v-2h8v1.522l-5.22,10.465Zm13.22-5.987C24,5.383,18.617,0,12,0S0,5.383,0,12s5.383,12,12,12,12-5.383,12-12Zm-2,0c0,5.514-4.486,10-10,10S2,17.514,2,12,6.486,2,12,2s10,4.486,10,10Z"/></svg>

);
