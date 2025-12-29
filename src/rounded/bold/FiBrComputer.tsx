import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrComputer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,0H5.5A5.506,5.506,0,0,0,0,5.5v8A5.506,5.506,0,0,0,5.5,19h5v2H8a1.5,1.5,0,0,0,0,3h8a1.5,1.5,0,0,0,0-3H13.5V19h5A5.506,5.506,0,0,0,24,13.5v-8A5.506,5.506,0,0,0,18.5,0ZM5.5,3h13A2.5,2.5,0,0,1,21,5.5V13H3V5.5A2.5,2.5,0,0,1,5.5,3Z"/></svg>

);
