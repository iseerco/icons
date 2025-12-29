import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTextSize = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,14v2h-3v-2h-2v9h-3V14h-2v2h-3v-2c0-1.65,1.35-3,3-3h7c1.65,0,3,1.35,3,3ZM13.5,4c.28,0,.5,.22,.5,.5v2.5h3v-2.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,1,0,2.57,0,4.5v2.5H3v-2.5c0-.28,.22-.5,.5-.5h3.5V23h3V4h3.5Z"/></svg>

);
