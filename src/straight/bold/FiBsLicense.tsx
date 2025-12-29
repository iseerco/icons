import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLicense = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,5.66V24h-4v-3h1V8h-5V3H5V21h4v3H2V3C2,1.35,3.35,0,5,0h11.38l5.62,5.66Zm-6,13.57v4.76l-2.5-2.5-2.5,2.5v-4.76c-1.2-.81-2-2.18-2-3.74,0-2.48,2.02-4.5,4.5-4.5s4.5,2.02,4.5,4.5c0,1.56-.8,2.93-2,3.74Zm-4-3.74c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5Z"/></svg>

);
