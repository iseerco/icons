import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBangladeshiTakaSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,12.5v1c0,5.79-4.71,10.5-10.5,10.5h-2c-2.48,0-4.5-2.02-4.5-4.5V11h-1.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h1.5v-3.5c0-.83-.67-1.5-1.5-1.5h-1c-.83,0-1.5-.67-1.5-1.5S1.67,0,2.5,0h1c2.48,0,4.5,2.02,4.5,4.5v3.5h1.5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5h-1.5v8.5c0,.83,.67,1.5,1.5,1.5h2c4.14,0,7.5-3.36,7.5-7.5v-1c0-.83-.67-1.5-1.5-1.5h-2c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h2c2.48,0,4.5,2.02,4.5,4.5Z"/></svg>

);
