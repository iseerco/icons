import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CameraSecurity = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15,10c0,1.654-1.346,3-3,3s-3-1.346-3-3,1.346-3,3-3,3,1.346,3,3Zm7-5v10c0,2.757-2.243,5-5,5h-1.616c.98.499,1.808,1.206,2.401,2.055.593.848-.116,1.945-1.244,1.945H7.459c-1.129,0-1.837-1.098-1.244-1.945.594-.848,1.421-1.556,2.401-2.055h-1.616c-2.757,0-5-2.243-5-5V5C2,2.243,4.243,0,7,0h10c2.757,0,5,2.243,5,5Zm-5,5c0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5,5-2.243,5-5Z"/></svg>

);
