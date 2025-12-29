import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowAltFromRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,3c-.829,0-1.5,.671-1.5,1.5v6H7v-3.587c0-.811-.994-1.218-1.575-.644L.27,11.356c-.36,.356-.36,.932,0,1.288l5.154,5.087c.581,.574,1.575,.167,1.575-.644v-3.587h14v6c0,.829,.671,1.5,1.5,1.5s1.5-.671,1.5-1.5V4.5c0-.829-.671-1.5-1.5-1.5Z"/></svg>

);
