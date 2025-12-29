import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Shredder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,5H5V0h14V5Zm5,5c0-1.65-1.35-3-3-3H3c-1.65,0-3,1.35-3,3v6H24v-6ZM5,18H3v6h2v-6Zm4,0h-2v6h2v-6Zm4,0h-2v6h2v-6Zm4,0h-2v6h2v-6Zm4,0h-2v6h2v-6Z"/></svg>

);
