import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPaintRoller = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,3h-1.5V0H0V9H19v-3h1.5c.276,0,.5,.225,.5,.5v4c0,.275-.224,.5-.5,.5H11.5c-1.93,0-3.5,1.57-3.5,3.5v1.5h.014c-.612,.456-1.014,1.178-1.014,2v6h5v-6c0-.822-.402-1.544-1.014-2h.014v-1.5c0-.275,.224-.5,.5-.5h9c1.93,0,3.5-1.57,3.5-3.5V6.5c0-1.93-1.57-3.5-3.5-3.5Zm-4.5,3H3V3h13v3Z"/></svg>

);
