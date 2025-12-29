import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTarget = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm.5,22.988v-2.988h-1v2.988c-5.668-.255-10.233-4.82-10.488-10.488h2.988v-1H1.012C1.267,5.832,5.832,1.267,11.5,1.012v2.988h1V1.012c5.668.255,10.233,4.82,10.488,10.488h-2.988v1h2.988c-.255,5.668-4.82,10.233-10.488,10.488Zm0-11.488h3.5v1h-3.5v3.5h-1v-3.5h-3.5v-1h3.5v-3.5h1v3.5Z"/>
</svg>

);
