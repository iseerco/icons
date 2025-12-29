import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MarsStrokeUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,10.072v-1.072h3v-2h-3V3l2.5,2.5,1.414-1.414L13.414,.586c-.779-.78-2.049-.78-2.828,0l-3.5,3.5,1.414,1.414,2.5-2.5V7h-3v2h3v1.072c-3.387,.487-6,3.408-6,6.928,0,3.86,3.141,7,7,7s7-3.14,7-7c0-3.52-2.613-6.441-6-6.928Zm-1,11.928c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Z"/></svg>

);
