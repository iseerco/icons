import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleX = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.029,17.75l-3.002-4.059-2.987,4.059h-2.482l4.229-5.75-4.182-5.75h2.481l2.942,4.059,2.962-4.059h2.482l-4.204,5.75,4.246,5.75h-2.484Z"/></svg>

);
