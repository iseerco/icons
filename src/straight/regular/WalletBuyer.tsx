import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WalletBuyer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16.5,15.5c0-1.379,1.121-2.5,2.5-2.5s2.5,1.121,2.5,2.5-1.121,2.5-2.5,2.5-2.5-1.121-2.5-2.5Zm4.5,3.5h-4c-1.654,0-3,1.346-3,3v2h2v-2c0-.551.449-1,1-1h4c.551,0,1,.449,1,1v2h2v-2c0-1.654-1.346-3-3-3ZM3,2h21V0H3C1.346,0,0,1.346,0,3v14c0,1.654,1.346,3,3,3h9.424c.352-.801.913-1.483,1.607-2H3c-.551,0-1-.449-1-1V5.816c.314.112.648.184,1,.184h19v5.525c1.207.914,2,2.347,2,3.975V4H3c-.551,0-1-.449-1-1s.449-1,1-1Z"/>
</svg>

);
