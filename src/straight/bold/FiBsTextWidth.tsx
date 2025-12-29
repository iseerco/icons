import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTextWidth = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7,6h-3V3.5c0-1.93,1.57-3.5,3.5-3.5h9c1.93,0,3.5,1.57,3.5,3.5v2.5h-3V3.5c0-.28-.22-.5-.5-.5h-3V15h-3V3h-3c-.28,0-.5,.22-.5,.5v2.5Zm16.7,12.77l-3.7-3.27v2.5H4v-2.5L.3,18.77c-.4,.35-.4,.97,0,1.33l3.7,3.4v-2.5H20v2.5l3.7-3.4c.4-.35,.4-.97,0-1.33Z"/></svg>

);
