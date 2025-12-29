import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowsAltH = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.73,11.356l-5.154-5.087c-.581-.574-1.575-.167-1.575,.644v3.587H7v-3.587c0-.811-.994-1.218-1.575-.644L.27,11.356c-.36,.356-.36,.932,0,1.288l5.154,5.087c.581,.574,1.575,.167,1.575-.644v-3.587h10v3.587c0,.811,.994,1.218,1.575,.644l5.154-5.087c.36-.356,.36-.932,0-1.288Z"/></svg>

);
