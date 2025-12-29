import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsExit = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,3H8V0H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H8V21H3Z"/><path d="M22.948,9.525,18.362,4.939,16.241,7.061l3.413,3.412L5,10.5,5,13.5l14.7-.027-3.466,3.466,2.121,2.122,4.587-4.586A3.506,3.506,0,0,0,22.948,9.525Z"/></svg>

);
