import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pump = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15,6c-.732,0-1.409.212-2,.556V2h2V0H4v2h2v10H2v-2H0v11h2v-2h9v1c0,2.206,1.794,4,4,4h9V6h-9ZM2,17v-3h4v3H2Zm6,0V2h3v15h-3Zm7,5c-1.103,0-2-.897-2-2v-10c0-1.103.897-2,2-2h7v2h-7v2h7v2h-7v2h7v2h-7v2h7v2h-7Z"/>
</svg>

);
