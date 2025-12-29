import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PhoneGuide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.287,19.114l-1.775,1.775c-2.027-.773-3.521-2.208-4.403-4.403l1.775-1.775-2.712-2.712-1.378,1.378c-.54.539-.795,1.249-.795,1.957,0,3.914,5.032,8.665,8.665,8.665.708,0,1.418-.256,1.957-.795l1.378-1.378-2.712-2.712h-.001Zm-10.765-1.115h-4.522V0h12c1.105,0,2,.895,2,2v12.999l-5.827-5.827-2.791,2.791c-.891.89-1.382,2.087-1.382,3.373,0,.872.191,1.773.522,2.665Zm4.751,6H2c-1.105,0-2-.895-2-2s.895-2,2-2h9.508c.951,1.53,2.279,2.934,3.764,4Zm-13.273-6c-.738-.001-1.451.271-2,.765V3C0,1.343,1.343,0,3,0h1v18h-2Z"/>
</svg>

);
