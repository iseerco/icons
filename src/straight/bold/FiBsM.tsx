import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsM = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24h-3V3.337l-9,13.809L3.005,3.344l-.005,20.656H0V2.92C0,1.602,.77,.507,1.962,.132c1.208-.383,2.527,.078,3.275,1.146l6.762,10.374L18.734,1.319c.774-1.108,2.09-1.573,3.304-1.187,1.192,.375,1.962,1.47,1.962,2.788V24Z"/></svg>

);
