import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBangladeshiTakaSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,10.5v4c0,5.24-4.26,9.5-9.5,9.5h-4c-1.38,0-2.5-1.12-2.5-2.5V9H2v-1H6V2.5c0-.83-.67-1.5-1.5-1.5H2V0h2.5c1.38,0,2.5,1.12,2.5,2.5v5.5h4v1H7v12.5c0,.83,.67,1.5,1.5,1.5h4c4.69,0,8.5-3.81,8.5-8.5v-4c0-.83-.67-1.5-1.5-1.5h-3.5v-1h3.5c1.38,0,2.5,1.12,2.5,2.5Z"/></svg>

);
