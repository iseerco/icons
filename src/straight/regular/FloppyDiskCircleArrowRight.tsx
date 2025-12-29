import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FloppyDiskCircleArrowRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,19V3c0-.55,.45-1,1-1h2v6h11V2.82l3,3v2.41c.7,.16,1.37,.4,2,.72v-3.96L16.01,0H3C1.35,0,0,1.35,0,3V21H8.95c-.31-.63-.56-1.3-.72-2H2ZM7,6V2h7V6H7Zm3.5,4c.26,0,.5,.03,.74,.08-1.74,1.45-2.92,3.55-3.19,5.92-.65-.64-1.06-1.52-1.06-2.5,0-1.93,1.57-3.5,3.5-3.5Zm6.5,0c-3.86,0-7,3.14-7,7s3.14,7,7,7,7-3.14,7-7-3.14-7-7-7Zm0,12c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Zm2.41-6.41c.78,.78,.78,2.05,0,2.83l-2.17,2.17-1.41-1.41,1.17-1.17h-3v-2h3l-1.09-1.09,1.41-1.41,2.09,2.09Z"/></svg>

);
