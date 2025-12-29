import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DownFromBracket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M17,5H7V13H.071l9.795,10.106,.009,.009c.567,.57,1.322,.885,2.126,.885h0c.804,0,1.559-.313,2.134-.893l9.815-10.107h-6.951V5Zm2.222,10l-6.511,6.705c-.189,.19-.441,.295-.708,.295h0c-.266,0-.516-.104-.705-.291l-6.502-6.709h4.206V7h6V15h4.222ZM24,3v6h-2V3c0-.551-.449-1-1-1H3c-.551,0-1,.449-1,1v6H0V3C0,1.346,1.346,0,3,0H21c1.654,0,3,1.346,3,3Z"/>
</svg>

);
