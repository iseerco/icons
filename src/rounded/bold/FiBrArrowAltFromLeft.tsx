import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowAltFromLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.73,11.356l-5.154-5.087c-.581-.574-1.575-.167-1.575,.644v3.587H3V4.5c0-.829-.671-1.5-1.5-1.5s-1.5,.671-1.5,1.5v15c0,.829,.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-6h14v3.587c0,.811,.994,1.218,1.575,.644l5.154-5.087c.36-.356,.36-.932,0-1.288Z"/></svg>

);
