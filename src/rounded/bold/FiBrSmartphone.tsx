import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSmartphone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.5,0h-5A5.506,5.506,0,0,0,4,5.5v13A5.506,5.506,0,0,0,9.5,24h5A5.506,5.506,0,0,0,20,18.5V5.5A5.506,5.506,0,0,0,14.5,0Zm-5,3h5A2.5,2.5,0,0,1,17,5.5V18H7V5.5A2.5,2.5,0,0,1,9.5,3ZM12,22h0a1,1,0,0,1-1-1h0a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1h0A1,1,0,0,1,12,22Z"/></svg>

);
