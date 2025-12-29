import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareX = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm-5.078,19l-3.922-5.309-3.865,5.309h-2.481l5.106-7-5.106-6.981h2.481l3.865,5.289,3.807-5.289h2.481l-5.048,6.981,5.164,7h-2.481Z"/></svg>

);
