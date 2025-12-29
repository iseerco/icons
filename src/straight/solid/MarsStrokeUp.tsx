import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MarsStrokeUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,10.08v-1.08h3v-2h-3V3l2.5,2.5,1.414-1.414L13.414,.586c-.779-.78-2.049-.78-2.828,0l-3.5,3.5,1.414,1.414,2.5-2.5V7h-3v2h3v1.08c-3.386,.488-6,3.401-6,6.92,0,3.86,3.141,7,7,7s7-3.14,7-7c0-3.519-2.614-6.432-6-6.92Z"/></svg>

);
