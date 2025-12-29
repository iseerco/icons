import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,10V5.646A5.041,5.041,0,0,0,18.35.83a24.742,24.742,0,0,0-12.7,0A5.041,5.041,0,0,0,2,5.646V10a2,2,0,0,0-2,2v1a2,2,0,0,0,2,2v2a4.994,4.994,0,0,0,2,4v.5a2.5,2.5,0,0,0,4.95.5h6.1A2.5,2.5,0,0,0,20,21.5V21a4.994,4.994,0,0,0,2-4V15a2,2,0,0,0,2-2V12A2,2,0,0,0,22,10Zm-9,3V7h7v6ZM4,13V7h7v6ZM6.2,2.752a22.75,22.75,0,0,1,11.6,0A3,3,0,0,1,19.931,5H4.069A3,3,0,0,1,6.2,2.752ZM17,20H7a3,3,0,0,1-3-3V15H6v1a1,1,0,0,0,2,0V15h8v1a1,1,0,0,0,2,0V15h2v2A3,3,0,0,1,17,20Z"/></svg>

);
