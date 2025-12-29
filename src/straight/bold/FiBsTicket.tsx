import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTicket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,0H13.312V1.5a1.313,1.313,0,1,1-2.625,0V0H6A3,3,0,0,0,3,3V24h7.687V22.5a1.313,1.313,0,1,1,2.625,0V24H21V3A3,3,0,0,0,18,0ZM16.05,21a4.3,4.3,0,0,0-8.1,0H6V16H8V13H6V3H7.95a4.3,4.3,0,0,0,8.1,0H18V13H16v3h2v5Z"/><rect x="10" y="13" width="4" height="3"/></svg>

);
