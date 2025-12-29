import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsManatSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,13v11h-3V13c0-3.34-2.36-6.15-5.5-6.84V24h-3V6.16c-3.14,.69-5.5,3.49-5.5,6.84v11H2V13C2,8,5.69,3.84,10.5,3.11V0h3V3.11c4.81,.73,8.5,4.88,8.5,9.89Z"/></svg>

);
