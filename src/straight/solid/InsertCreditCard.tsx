import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const InsertCreditCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M20,0H4C1.794,0,0,1.794,0,4c0,1.474,.81,2.75,2,3.444v-3.444c0-1.103,.897-2,2-2V24h4V2h2V24h10V2c1.103,0,2,.897,2,2v3.444c1.19-.694,2-1.97,2-3.444,0-2.206-1.794-4-4-4Zm-4.5,20c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-.672,1.5-1.5,1.5Z"/>
</svg>

);
