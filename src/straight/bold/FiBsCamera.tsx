import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCamera = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,4H18.729L15.644,0H8.356L5.271,4H3A3,3,0,0,0,0,7V24H24V7A3,3,0,0,0,21,4Zm0,17H3V7H21Z"/><path d="M12,19.5A5.5,5.5,0,1,0,6.5,14,5.506,5.506,0,0,0,12,19.5Zm0-8A2.5,2.5,0,1,1,9.5,14,2.5,2.5,0,0,1,12,11.5Z"/></svg>

);
