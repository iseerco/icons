import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Multiple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,9h4v2h-4v4h-2v-4h-4v-2h4v-4h2v4Zm13-2v17H4v-4H0V3C0,1.346,1.346,0,3,0h14c1.654,0,3,1.346,3,3v1h1c1.654,0,3,1.346,3,3ZM2,18h16V3c0-.551-.449-1-1-1H3c-.551,0-1,.449-1,1v15ZM22,7c0-.551-.449-1-1-1h-1v14H6v2h16V7Z"/>
</svg>

);
