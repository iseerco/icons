import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Hastag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.765,9,24,7H18.054L18.9,0H16.883l-.841,7H9.159L10,0H7.988L7.147,7H.941L.706,9h6.2l-.721,6H.235L0,17H5.946l-.841,7H7.117l.841-7h6.883L14,24h2.012l.841-7h6.206l.235-2h-6.2l.721-6Zm-8.684,6H8.2l.721-6H15.8Z"/></svg>

);
