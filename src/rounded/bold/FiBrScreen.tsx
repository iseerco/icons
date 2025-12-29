import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrScreen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,2H5.5A5.506,5.506,0,0,0,0,7.5v6A5.506,5.506,0,0,0,5.5,19h5v2H8a1.5,1.5,0,0,0,0,3h8a1.5,1.5,0,0,0,0-3H13.5V19h5A5.506,5.506,0,0,0,24,13.5v-6A5.506,5.506,0,0,0,18.5,2ZM21,13.5A2.5,2.5,0,0,1,18.5,16H5.5A2.5,2.5,0,0,1,3,13.5v-6A2.5,2.5,0,0,1,5.5,5h13A2.5,2.5,0,0,1,21,7.5Z"/></svg>

);
