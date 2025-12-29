import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsVideoPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,5.125l-3,3v-1.625c0-1.93-1.57-3.5-3.5-3.5H3.5c-1.93,0-3.5,1.57-3.5,3.5v14.5H21v-5.125l3,3V5.125Zm-6,12.875H3V6.5c0-.276,.224-.5,.5-.5h14c.276,0,.5,.224,.5,.5v11.5Zm-6-7.5h2.5v3h-2.5v2.5h-3v-2.5h-2.5v-3h2.5v-2.5h3v2.5Z"/></svg>

);
