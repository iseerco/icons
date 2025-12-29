import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const QrScan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,11h24v2H0v-2Zm2,10v-4H0v4c0,1.654,1.346,3,3,3h4v-2H3c-.551,0-1-.449-1-1Zm20,0c0,.551-.449,1-1,1h-4v2h4c1.654,0,3-1.346,3-3v-4h-2v4ZM21,0h-4v2h4c.551,0,1,.449,1,1v4h2V3c0-1.654-1.346-3-3-3ZM2,3c0-.551.449-1,1-1h4V0H3C1.346,0,0,1.346,0,3v4h2V3Z"/>
</svg>

);
