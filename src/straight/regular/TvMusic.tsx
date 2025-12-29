import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TvMusic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,19V5c0-1.654-1.346-3-3-3H3C1.346,2,0,3.346,0,5v14H11v1H7v2h10v-2h-4v-1h11ZM2,5c0-.551,.449-1,1-1H21c.552,0,1,.449,1,1v12H2V5Zm12,1h2v2h-2v4.5c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5c.171,0,.338,.017,.5,.05v-2.05c0-1.103,.897-2,2-2Z"/></svg>

);
