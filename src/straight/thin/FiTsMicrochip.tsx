import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMicrochip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7,17h10V7H7v10Zm1-9h8v8H8V8Zm16,0v-1h-2v-2.5c0-1.38-1.12-2.5-2.5-2.5h-2.5V0h-1V2h-2V0h-1V2h-2V0h-1V2h-2V0h-1V2h-2.5c-1.38,0-2.5,1.12-2.5,2.5v2.5H0v1H2v2H0v1H2v2H0v1H2v2H0v1H2v2.5c0,1.38,1.12,2.5,2.5,2.5h2.5v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2.5c1.38,0,2.5-1.12,2.5-2.5v-2.5h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2Zm-4.5,13H4.5c-.83,0-1.5-.67-1.5-1.5V4.5c0-.83,.67-1.5,1.5-1.5h15c.83,0,1.5,.67,1.5,1.5v15c0,.83-.67,1.5-1.5,1.5Z"/></svg>

);
