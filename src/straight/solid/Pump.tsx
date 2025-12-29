import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pump = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,6c-2.206,0-4,1.794-4,4v10c0,2.206,1.794,4,4,4h8V6h-8Zm6,15h-7v-2h7v2Zm0-5h-7v-2h7v2Zm0-5h-7v-2h7v2ZM12,2h-2v17H2v2H0v-9h2v2h3V2h-2V0h9v2Z"/>
</svg>

);
