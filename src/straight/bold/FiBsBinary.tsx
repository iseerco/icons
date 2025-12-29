import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBinary = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.5,11c2.48,0,4.5-2.02,4.5-4.5v-2c0-2.48-2.02-4.5-4.5-4.5S4,2.02,4,4.5v2c0,2.48,2.02,4.5,4.5,4.5Zm-1.5-6.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5v2c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-2ZM15.5,13c-2.48,0-4.5,2.02-4.5,4.5v2c0,2.48,2.02,4.5,4.5,4.5s4.5-2.02,4.5-4.5v-2c0-2.48-2.02-4.5-4.5-4.5Zm1.5,6.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-2c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5v2Zm-8-6.5v11h-3v-6.44l-1.88-1.83,2.66-2.72h2.22Zm7-8.44l-1.88-1.83,2.66-2.72h2.22V11h-3V4.56Z"/></svg>

);
