import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DownFromBracket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12.002,24h0c-.804,0-1.559-.314-2.126-.885l-.009-.009L.071,13H7V5h10V13h6.951l-9.815,10.107c-.576,.579-1.331,.893-2.134,.893ZM24,3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3v6H2V3c0-.551,.449-1,1-1H21c.551,0,1,.449,1,1v6h2V3Z"/>
</svg>

);
