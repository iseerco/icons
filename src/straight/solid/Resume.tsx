import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Resume = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <polygon points="21.414 5 17 5 17 .586 21.414 5"/>
  <path d="M15,7V0H5c-1.657,0-3,1.343-3,3V24H22V7h-7Zm-5.5-2c1.105,0,2,.895,2,2s-.895,2-2,2-2-.895-2-2,.895-2,2-2Zm-3.5,7c0-1.103,.897-2,2-2h3c1.103,0,2,.897,2,2v1h-2v-1h-3v1h-2v-1Zm12,5H6v-2h12v2Zm0,4H6v-2h12v2Z"/>
</svg>

);
