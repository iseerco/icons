import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Abacus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19,0H5C3.346,0,2,1.346,2,3V24H22V3c0-1.654-1.346-3-3-3ZM5,2h14c.551,0,1,.448,1,1v2h-2v-1h-2v1h-4v-1h-2v1h-2v-1h-2v1H4V3c0-.552,.449-1,1-1Zm5,14v1h-2v-1h-2v1H4v-4h2v1h2v-1h2v1h2v-1h4v1h2v-1h2v4H12v-1h-2Zm8-5v-1h-2v1h-4v-1h-2v1h-2v-1h-2v1H4V7h2v1h2v-1h2v1h2v-1h4v1h2v-1h2v4h-2ZM4,22v-3h2v1h2v-1h2v1h2v-1h8v3H4Z"/>
</svg>

);
