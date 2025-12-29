import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const IceCream = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.041,10C12.6,3.789,21.7,3.272,22,9.5h0l0,.023,0,.015h0c0,.155-.019.308-.033.462Zm-2.075,0c.413-6.614-9.346-6.611-8.932,0ZM2.633,12C2.677,12.084,12,23.99,12,23.99S21.324,12.084,21.367,12Zm9.391-5.909a6.48,6.48,0,0,1,4.6-2.986A5.02,5.02,0,0,0,7.39,3.068,6.5,6.5,0,0,1,12.024,6.091Z"/></svg>

);
