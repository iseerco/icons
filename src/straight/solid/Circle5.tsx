import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Circle5 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,18h-4v-2h4c1.103,0,2-.897,2-2s-.897-2-2-2h-4V6h7v2h-5v2h2c2.206,0,4,1.794,4,4s-1.794,4-4,4Zm12-6C24,5.383,18.617,0,12,0S0,5.383,0,12s5.383,12,12,12,12-5.383,12-12Z"/></svg>

);
