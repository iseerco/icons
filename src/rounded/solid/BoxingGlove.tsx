import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BoxingGlove = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1,7.077A7.009,7.009,0,0,1,8,0h5a7.01,7.01,0,0,1,6.713,5.029A4.993,4.993,0,0,0,15,10v4a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V10.17A3.114,3.114,0,0,1,19.839,7,3,3,0,0,1,23,10v3.075A7.48,7.48,0,0,1,19.752,19H2.827l-.377-.539A7.992,7.992,0,0,1,1,13.869V10.444A3.959,3.959,0,0,0,3,11h9a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H3A1.983,1.983,0,0,1,1,7.077ZM3,21v1a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V21Z"/></svg>

);
