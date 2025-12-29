import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Journal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15,0H2v3H0v2h2v2H0v2h2v2H0v2h2v2H0v2h2v2H0v2h2v3h13c1.654,0,3-1.346,3-3V3c0-1.654-1.346-3-3-3Zm-1,7H6v-2h8v2Zm10,15l-2,2-2-2V2c0-1.105.895-2,2-2h0c1.105,0,2,.895,2,2v20Z"/>
</svg>

);
