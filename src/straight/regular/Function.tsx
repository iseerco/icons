import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Function = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12.895,13h-2.522l-1.028,7.54c-.27,1.973-1.973,3.46-3.963,3.46h-2.381v-2h2.381c.995,0,1.847-.744,1.982-1.73l.991-7.27h-3.031l.286-2h3.018l1.028-7.54c.27-1.973,1.973-3.46,3.963-3.46h2.381v2h-2.381c-.995,0-1.847.744-1.982,1.73l-.991,7.27h2.535l-.286,2Zm7.99,2h-2.331l-1.554,2.58-1.619-2.58h-2.331l2.778,4.497-2.778,4.503h2.327l1.623-2.587,1.558,2.587h2.327l-2.713-4.503,2.713-4.497Z"/>
</svg>

);
