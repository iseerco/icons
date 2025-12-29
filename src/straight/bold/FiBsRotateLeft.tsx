import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRotateLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,12.038c0,4.963,4.038,9,9,9s9-4.037,9-9S16.962,3.038,12,3.038c-2.394,0-4.677,.976-6.353,2.647l2.353,2.353H2.091c-.602,0-1.091-.488-1.091-1.091V1.038L3.529,3.567C5.763,1.341,8.807,.038,12,.038c6.617,0,12,5.383,12,12s-5.383,12-12,12C5.383,24.038,0,18.656,0,12.038H3Z"/></svg>

);
