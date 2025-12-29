import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileEdit = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,8V3H3v18h7.996v3H0V3C0,1.346,1.346,0,3,0h11.381l5.619,5.665v5.772c-.409.198-.799.45-1.139.789l-1.861,1.861v-6.086h-5Zm11.361,5.639c-.852-.852-2.234-.852-3.086,0l-7.275,7.275v3.086h3.086l7.275-7.275c.852-.852.852-2.234,0-3.086Z"/></svg>

);
