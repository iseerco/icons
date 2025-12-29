import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrChair = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,13.257V5c0-2.757-2.243-5-5-5h-4c-2.757,0-5,2.243-5,5V13.257c-1.746,.619-3,2.287-3,4.243v5c0,.828,.671,1.5,1.5,1.5s1.5-.672,1.5-1.5v-3.5h14v3.5c0,.828,.671,1.5,1.5,1.5s1.5-.672,1.5-1.5v-5c0-1.956-1.254-3.624-3-4.243Zm-3-8.257V13h-2.5V3h.5c1.103,0,2,.897,2,2Zm-6-2h.5V13h-2.5V5c0-1.103,.897-2,2-2Z"/></svg>

);
