import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRewind = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,23.8l-8-5.714V23.8L1.82,14.393a3.278,3.278,0,0,1,0-5.335l.043-.029L15,.317V5.911L23,.2ZM3.551,11.509a.268.268,0,0,0-.1.217.271.271,0,0,0,.116.226L12,17.975V12.26l8,5.714V6.026L12,11.74V5.906Z"/></svg>

);
