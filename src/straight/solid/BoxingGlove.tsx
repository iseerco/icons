import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BoxingGlove = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1,7A7.008,7.008,0,0,1,8,0h5a7.01,7.01,0,0,1,6.713,5.029A4.993,4.993,0,0,0,15,10v4h2V10a3,3,0,0,1,6,0v3.075A7.48,7.48,0,0,1,19.752,19H2.827l-.377-.539A7.958,7.958,0,0,1,1,13.868V10.444A3.959,3.959,0,0,0,3,11H13V9H3A2,2,0,0,1,1,7ZM3,21v3H19V21Z"/></svg>

);
