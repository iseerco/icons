import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Shredder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,6h-2V0H5V6H3c-1.65,0-3,1.35-3,3v7H24v-7c0-1.65-1.35-3-3-3ZM7,2h10V6H7V2Zm15,12H2v-5c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1v5ZM3,18h2v6H3v-6Zm4,0h2v6h-2v-6Zm4,0h2v6h-2v-6Zm4,0h2v6h-2v-6Zm4,0h2v6h-2v-6Z"/></svg>

);
