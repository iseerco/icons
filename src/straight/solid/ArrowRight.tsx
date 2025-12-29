import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.124,9.879,18.538,5.293,17.124,6.707l4.262,4.263L0,11l0,2,21.446-.03-4.323,4.323,1.414,1.414,4.587-4.586A3.007,3.007,0,0,0,23.124,9.879Z"/></svg>

);
